import { Router } from "express";

import { clientsRoutes } from "@modules/client/infra/http/clients.routes";
import { productsRouter } from "@modules/products/infra/http/routes/products.routes";

const router = Router();

router.use("/clients", clientsRoutes);
router.use('/products', productsRouter);

export { router }