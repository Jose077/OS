import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('produto')
class Product {
  @PrimaryColumn()
  id: number;

  @Column({ name: "nome" })
  name: string;

  @Column({ name: "preco" })
  price: number;

  constructor() {
    if (process.env.NODE_ENV === 'test' && !this.id) {
      this.id = Math.ceil(Math.random() * 1000000);
    }
  }
}

export { Product }