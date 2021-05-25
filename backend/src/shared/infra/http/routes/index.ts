import { Router } from "express";
import { productsRouter } from "@modules/products/infra/http/routes/products.routes";

const router = Router();

router.use('/products', productsRouter);


export { router }