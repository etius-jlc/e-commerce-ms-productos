import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Categoriaproducto, CategoriaproductoRelations} from '../models';

export class CategoriaproductoRepository extends DefaultCrudRepository<
  Categoriaproducto,
  typeof Categoriaproducto.prototype.id,
  CategoriaproductoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Categoriaproducto, dataSource);
  }
}
