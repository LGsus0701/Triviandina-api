import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pregunta } from "./pregunta";

@Entity('categorias')
export class Categoria {
    @PrimaryGeneratedColumn({ name: 'id_categoria' })
    idCategoria: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'descripcion', type: 'text' })  
    descripcion: string;

    @OneToMany(() => Pregunta, pregunta => pregunta.categoria)
    preguntas: Pregunta[];
}
