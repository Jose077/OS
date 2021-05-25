import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./createProductUseCase";

class CreateProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, price } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const product = await createProductUseCase.execute(name, price);

    return response.status(201).json(product);
  }
}

export { CreateProductController }