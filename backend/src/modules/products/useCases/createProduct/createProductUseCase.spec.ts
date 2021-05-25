import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateProductUseCase } from "./createProductUseCase";

let createProductUseCase: CreateProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe('Create Product UseCase', () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
  });

  it('should be able to create a new product', async () => {
    const product = await createProductUseCase.execute('Computador', 3000);

    expect(product).toHaveProperty('id');
  });

  it('should not be able to create a new product already exists', async () => {
    await productsRepositoryInMemory.create("Product test", 314);

    await expect(
      createProductUseCase.execute('Product test', 147)
    ).rejects.toEqual(new AppError("Product already exists"))
  });
});