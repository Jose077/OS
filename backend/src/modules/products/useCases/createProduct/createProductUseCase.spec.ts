import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
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
  })
});