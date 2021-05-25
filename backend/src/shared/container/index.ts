import { container } from "tsyringe";

import { IClientsRepository } from "@modules/client/repositories/IClientsRepository";
import { ClientsRepository } from "@modules/client/infra/typeorm/repositories/ClientsRepository";

import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { ProductsRepository } from "@modules/products/infra/typeorm/repositories/ProductsRepository";

// IClientsRepository
container.registerSingleton<IClientsRepository>("ClientsRepository", ClientsRepository);

// IProductsRepository
container.registerSingleton<IProductsRepository>('ProductsRepository', ProductsRepository);
