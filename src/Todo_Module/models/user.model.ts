// src/todo/user.model.ts

import { AutoIncrement, Model, PrimaryKey } from 'sequelize-typescript';
import { Table, Column, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
