import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Pregunta } from "./pregunta";

@Entity('opciones')
export class Opcion {

    @PrimaryGeneratedColumn({ name: 'id_opcion' })
    idOpcion: number;

    @ManyToOne(() => Pregunta, pregunta => pregunta.opciones)
    @JoinColumn({ name: 'id_pregunta' })
    pregunta: Pregunta;

    @Column()
    descripcion: string;

    @Column({ type: 'boolean' })
    valido: boolean;
}
