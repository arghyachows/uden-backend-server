import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Siteuser} from '../models';
import {SiteuserRepository} from '../repositories';

export class SiteUserController {
  constructor(
    @repository(SiteuserRepository)
    public siteuserRepository: SiteuserRepository,
  ) {}

  @post('/siteusers')
  @response(200, {
    description: 'Siteuser model instance',
    content: {'application/json': {schema: getModelSchemaRef(Siteuser)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Siteuser, {
            title: 'NewSiteuser',
            exclude: ['id'],
          }),
        },
      },
    })
    siteuser: Omit<Siteuser, 'id'>,
  ): Promise<Siteuser> {
    return this.siteuserRepository.create(siteuser);
  }

  @get('/siteusers/count')
  @response(200, {
    description: 'Siteuser model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Siteuser) where?: Where<Siteuser>): Promise<Count> {
    return this.siteuserRepository.count(where);
  }

  @get('/siteusers')
  @response(200, {
    description: 'Array of Siteuser model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Siteuser, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Siteuser) filter?: Filter<Siteuser>,
  ): Promise<Siteuser[]> {
    return this.siteuserRepository.find(filter);
  }

  @patch('/siteusers')
  @response(200, {
    description: 'Siteuser PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Siteuser, {partial: true}),
        },
      },
    })
    siteuser: Siteuser,
    @param.where(Siteuser) where?: Where<Siteuser>,
  ): Promise<Count> {
    return this.siteuserRepository.updateAll(siteuser, where);
  }

  @get('/siteusers/{id}')
  @response(200, {
    description: 'Siteuser model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Siteuser, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Siteuser, {exclude: 'where'})
    filter?: FilterExcludingWhere<Siteuser>,
  ): Promise<Siteuser> {
    return this.siteuserRepository.findById(id, filter);
  }

  @patch('/siteusers/{id}')
  @response(204, {
    description: 'Siteuser PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Siteuser, {partial: true}),
        },
      },
    })
    siteuser: Siteuser,
  ): Promise<void> {
    await this.siteuserRepository.updateById(id, siteuser);
  }

  @put('/siteusers/{id}')
  @response(204, {
    description: 'Siteuser PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() siteuser: Siteuser,
  ): Promise<void> {
    await this.siteuserRepository.replaceById(id, siteuser);
  }

  @del('/siteusers/{id}')
  @response(204, {
    description: 'Siteuser DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.siteuserRepository.deleteById(id);
  }
}
