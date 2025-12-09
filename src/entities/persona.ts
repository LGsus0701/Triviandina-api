import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('personas')
export class Persona {
    @PrimaryGeneratedColumn({name: 'id_persona'})
    idPersona: number;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'apellido_paterno'})
    apellidoPaterno: string;

    @Column({name: 'apellido_materno'})
    apellidoMaterno: string;

    @Column({name: 'fecha_nacimiento'})
    fechaNacimiento: Date;

    @Column({name: 'fecha_registro'})
    fechaRegistro: Date;
}