import { Router } from 'express';
import { CreateProductController } from '@modules/products/useCases/createProduct/createProductController';

const productsRouter = Router();

const createProductController = new CreateProductController();

productsRouter.post('/', createProductController.handle);

export { productsRouter }