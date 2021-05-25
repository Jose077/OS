import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create Product Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to create a new product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: 'Moto',
        price: 80
      });


    expect(response.status).toBe(201);
  });

  it('should not be able to create a new product already exists', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: 'Moto',
        price: 154
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Product already exists");
  })
});