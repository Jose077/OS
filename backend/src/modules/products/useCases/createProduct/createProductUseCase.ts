import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { Product } from '@modules/products/infra/typeorm/entities/Product';

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) { }

  public async execute(name: string, price: number): Promise<Product> {
    const product = await this.productsRepository.create(name, price);

    return product
  }
}

export { CreateProductUseCase }