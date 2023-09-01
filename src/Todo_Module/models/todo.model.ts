// src/todo/todo.model.ts

import { AutoIncrement, DataType, Model, PrimaryKey } from 'sequelize-typescript';
import { Table, Column } from 'sequelize-typescript';

@Table
export class Todo extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  // @Column
  // title: string;
  @Column({
    type: DataType.STRING, // This column will store strings (text)
    allowNull: false,     // The title cannot be null
  })
  title: string;

  // @Column
  // description: string;
  @Column({
    type: DataType.TEXT,   // This column will store longer text
    allowNull: true,       // The description can be null
  })
  description: string;


  @Column({
    type: DataType.DATE,   // This column will store dates
    allowNull: false,      // createdAt cannot be null
    defaultValue: new Date(), // Default value is the current date and time
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,   // This column will store dates
    allowNull: false,      // updatedAt cannot be null
    defaultValue: new Date(), // Default value is the current date and time
  })
  updatedAt: Date;
}
