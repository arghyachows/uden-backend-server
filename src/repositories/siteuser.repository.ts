import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Siteuser, SiteuserRelations} from '../models';

export class SiteuserRepository extends DefaultCrudRepository<
  Siteuser,
  typeof Siteuser.prototype.id,
  SiteuserRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Siteuser, dataSource);
  }
}
