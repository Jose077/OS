import { ICreateClient } from "@modules/client/dtos/ICreateClient";
import { Client } from "@modules/client/infra/typeorm/entities/Client";
import { IClientsRepository } from "../IClientsRepository";

class ClientsRepositoryInMemory implements IClientsRepository {
  private clients: Client[] = [];

  find(name: string, page: number, amount: number): Promise<Client[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: number): Promise<Client> {
    const client = this.clients.find((client) => client.id === id);

    return client;
  }

  async findByName(name: string): Promise<Client> {
    const client = this.clients.find((client) => client.name === name);

    return client;
  }

  async create({ name }: ICreateClient): Promise<Client> {
    const client = new Client();

    Object.assign(client, {
      name
    });

    this.clients.push(client);

    return client;
  }
}

export { ClientsRepositoryInMemory }