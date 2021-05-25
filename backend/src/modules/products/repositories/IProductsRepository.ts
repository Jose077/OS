import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
  create(name: string, price: number): Promise<Product>;
}

export { IProductsRepository }