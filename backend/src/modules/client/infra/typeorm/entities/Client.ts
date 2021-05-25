import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cliente")
class Client {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: "nome" })
  name: string;

  constructor() {
    if (process.env.NODE_ENV === 'test' && !this.id) {
      this.id = Math.ceil(Math.random() * 1000000);
    }
  }
}

export { Client }