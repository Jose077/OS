import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { getRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create(name: string, price: number): Promise<Product> {
    const product = this.ormRepository.create({ name, price });

    await this.ormRepository.save(product);

    return product;
  }
}

export { ProductsRepository }