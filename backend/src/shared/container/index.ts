import { container } from "tsyringe";

import { IClientsRepository } from "@modules/client/repositories/IClientsRepository";
import { ClientsRepository } from "@modules/client/infra/typeorm/repositories/ClientsRepository";

// IClientsRepository
container.registerSingleton<IClientsRepository>("ClientsRepository", ClientsRepository);