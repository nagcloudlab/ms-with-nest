
import {
    AfterInsert,
    AfterRemove,
    AfterUpdate,
    Column,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public firstName: string;
    @Column()
    public lastName: string;
    @Column()
    public email: string;
    @Column()
    public password: string;
}