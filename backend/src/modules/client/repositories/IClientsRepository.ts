import { ICreateClient } from "../dtos/ICreateClient";
import { Client } from "../infra/typeorm/entities/Client";

interface IClientsRepository {
  find(name: string, page: number, amount: number): Promise<Client[]>;
  findById(id: number): Promise<Client>;
  findByName(name: string): Promise<Client>;
  create(data: ICreateClient): Promise<Client>;
}

export { IClientsRepository }