import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  private products: Product[] = [];

  public async create(name: string, price: number): Promise<Product> {
    const product = new Product();

    Object.assign(product, {
      name,
      price
    });

    this.products.push(product);

    return product;
  }
}

export { ProductsRepositoryInMemory }