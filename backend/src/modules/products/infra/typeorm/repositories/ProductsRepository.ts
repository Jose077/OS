import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { getRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async findByName(name: string): Promise<Product> {
    return await this.repository.findOne({ name });
  }

  public async create(name: string, price: number): Promise<Product> {
    const product = this.repository.create({ name, price });

    await this.repository.save(product);

    return product;
  }
}

export { ProductsRepository }