import { ClientsRepositoryInMemory } from "@modules/client/repositories/in-memory/ClientsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateClientUseCase } from "./CreateClientUseCase";


let createClientUseCase: CreateClientUseCase;
let clientRepositoryInMemory: ClientsRepositoryInMemory;

describe("Create Client", () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientsRepositoryInMemory();
    createClientUseCase = new CreateClientUseCase(clientRepositoryInMemory);
  });

  it("should be able create a new client", async () => {
    const client = await createClientUseCase.execute({ name: 'Client test' });

    expect(client).toHaveProperty("id");
  });

  it("should not be able create client already exists", async () => {
    await clientRepositoryInMemory.create({ name: 'Client test' });

    await expect(
      createClientUseCase.execute({ name: 'Client test' })
    ).rejects.toEqual(new AppError("Client already exists"));
  });
});