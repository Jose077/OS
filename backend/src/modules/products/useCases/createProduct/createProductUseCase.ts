import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) { }

  public async execute(name: string, price: number): Promise<Product> {
    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("Product already exists");
    }

    const product = await this.productsRepository.create(name, price);

    return product
  }
}

export { CreateProductUseCase }