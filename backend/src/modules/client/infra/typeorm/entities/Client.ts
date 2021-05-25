import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("cliente")
class Client {
  @PrimaryColumn()
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