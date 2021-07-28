import {
  Table,
  Column,
  Model,
  IsUUID,
  PrimaryKey,
  Unique,
  BeforeCreate,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
@Table({
  timestamps: true,
})
export class User extends Model<User> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Unique
  @Column
  name: string;

  @Column
  password: string;

  @BeforeCreate
  static createUUID(instance: User) {
    instance.id = uuidv4();
  }
}
