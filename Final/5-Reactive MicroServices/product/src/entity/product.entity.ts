import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({
    name: "product"
})
export class ProductEntity {
    @PrimaryColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    weight: number
}