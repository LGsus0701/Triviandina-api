import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('categorias')
export class Categoria {
    @PrimaryGeneratedColumn({ name: 'id_categoria' })
    idCategoria: number;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @Column({ name: 'url_imagen', type: 'text' })  
    urlImagen: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;
    
}
