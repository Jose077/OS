import { Router } from "express";

import { clientsRoutes } from "@modules/client/infra/http/clients.routes";

const router = Router();

router.use("/clients", clientsRoutes);

export { router }