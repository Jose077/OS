import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto')
class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "nome" })
  name: string;

  @Column({ name: "preco" })
  price: number;

  constructor() {
    if (!this.id) {
      this.id = Math.ceil(Math.random() * 100);
    }
  }
}

export { Product }