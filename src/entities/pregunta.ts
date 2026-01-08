import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Categoria } from "./categoria";
import { Opcion } from "./opcion";

@Entity('preguntas')
export class Pregunta {
    @PrimaryGeneratedColumn({ name: 'id_pregunta' })
    idPregunta: number;

    @ManyToOne(() => Categoria)
    @JoinColumn({ name: "id_categoria" })
    categoria: Categoria;

    
    @Column({ name: 'pregunta', type: 'text' })
    pregunta: string;


    @Column({ name: 'url_imagen' })
    urlImagen: string;

    @Column({ name: 'dificultad' })
    dificultad: string;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @OneToMany(() => Opcion, opcion => opcion.pregunta)
   opciones: Opcion[];
}
