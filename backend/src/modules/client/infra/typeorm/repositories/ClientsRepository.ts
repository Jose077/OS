import { ICreateClient } from "@modules/client/dtos/ICreateClient";
import { IClientsRepository } from "@modules/client/repositories/IClientsRepository";
import { getRepository, Repository } from "typeorm"
import { Client } from "../entities/Client"

class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  find(name: string, page: number, amount: number): Promise<Client[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: number): Promise<Client> {
    return await this.repository.findOne(id);
  }

  async findByName(name: string): Promise<Client> {
    return await this.repository.findOne({ name });
  }

  async create({ name }: ICreateClient): Promise<Client> {
    const client = this.repository.create({ name });

    await this.repository.save(client);

    return client;
  }
}

export { ClientsRepository }