import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Imagen, ImagenRelations, Producto} from '../models';
import {ProductoRepository} from './producto.repository';

export class ImagenRepository extends DefaultCrudRepository<
  Imagen,
  typeof Imagen.prototype.id,
  ImagenRelations
> {

  public readonly pertenec_a_producto: BelongsToAccessor<Producto, typeof Imagen.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ProductoRepository') protected productoRepositoryGetter: Getter<ProductoRepository>,
  ) {
    super(Imagen, dataSource);
    this.pertenec_a_producto = this.createBelongsToAccessorFor('pertenec_a_producto', productoRepositoryGetter,);
    this.registerInclusionResolver('pertenec_a_producto', this.pertenec_a_producto.inclusionResolver);
  }
}
