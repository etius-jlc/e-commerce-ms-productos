import {Entity, model, property} from '@loopback/repository';

@model()
export class Categoriaproducto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  id_producto?: number;

  @property({
    type: 'number',
  })
  id_categoria?: number;

  constructor(data?: Partial<Categoriaproducto>) {
    super(data);
  }
}

export interface CategoriaproductoRelations {
  // describe navigational properties here
}

export type CategoriaproductoWithRelations = Categoriaproducto & CategoriaproductoRelations;
