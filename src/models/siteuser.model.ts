import {Entity, model, property} from '@loopback/repository';

@model()
export class Siteuser extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
  })
  email?: string;


  constructor(data?: Partial<Siteuser>) {
    super(data);
  }
}

export interface SiteuserRelations {
  // describe navigational properties here
}

export type SiteuserWithRelations = Siteuser & SiteuserRelations;
