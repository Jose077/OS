import request from "supertest";

import { app } from "@shared/infra/http/app";

import createConnection from "@shared/infra/typeorm";
import { Connection } from "typeorm";

let connection: Connection;
describe("Create Client Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  })

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  })

  it("should be able create a new client", async () => {
    const response = await request(app)
      .post("/clients")
      .send({
        name: "Test Client"
      });

    expect(response.status).toBe(201);
  });
});