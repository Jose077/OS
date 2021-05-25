import { inject, injectable } from "tsyringe";

import { ICreateClient } from "@modules/client/dtos/ICreateClient";
import { Client } from "@modules/client/infra/typeorm/entities/Client";
import { IClientsRepository } from "@modules/client/repositories/IClientsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) { }

  async execute({ name }: ICreateClient): Promise<Client> {
    const clientAlreadyExists = await this.clientsRepository.findByName(name);

    if (clientAlreadyExists) {
      throw new AppError("Client already exists");
    }

    const client = await this.clientsRepository.create({ name });

    return client;
  }
}

export { CreateClientUseCase }