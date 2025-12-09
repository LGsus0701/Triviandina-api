import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Categoria } from "./categoria";

@Entity('preguntas')
export class Pregunta {
    @PrimaryGeneratedColumn({ name: 'id_pregunta' })
    idPregunta: number;

    @Column({ name: 'id_categoria' })
    idCategoria: number;

    @Column({ name: 'imagen_url', nullable: true })
    imagenUrl: string;

    @Column({ name: 'pregunta', type: 'text' })
    pregunta: string;

    @Column({ name: 'dificultad' })
    dificultad: string;

    @ManyToOne(() => Categoria, categoria => categoria.preguntas)
    @JoinColumn({ name: "id_categoria" })
    categoria: Categoria;
}
