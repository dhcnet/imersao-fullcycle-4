import { Column, DataType, Default, PrimaryKey } from "sequelize-typescript";

export class CreateAccountDto {
 
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id:string;

    @Column({ allowNull: false })
    name: string;

    @Default(0)
    @Column({ type: DataType.DECIMAL(10,2), allowNull: false})
    balance: number;

    @Column({ allowNull: false})
    subdomain: string;

}