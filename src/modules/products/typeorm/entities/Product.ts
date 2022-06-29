import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products') //decorator referenciando a tabela products do postgres
class Product {
  @PrimaryGeneratedColumn('uuid') //definir como primary e o tipo lá
  id: string;

  @Column() //nao precisa especificar string pq é padrao
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
