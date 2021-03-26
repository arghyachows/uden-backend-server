import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoDS',
  connector: 'mongodb',
  url:
    'mongodb://admin:admin@cluster0-shard-00-00-vz55a.mongodb.net:27017,cluster0-shard-00-01-vz55a.mongodb.net:27017,cluster0-shard-00-02-vz55a.mongodb.net:27017/uden?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: 'uden',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDsDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
