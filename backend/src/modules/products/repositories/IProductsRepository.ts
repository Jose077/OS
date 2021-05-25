import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
  findByName(name: string): Promise<Product>;
  create(name: string, price: number): Promise<Product>;
}

export { IProductsRepository }