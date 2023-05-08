import { ClientsService } from './clients.service';
import { ClientsControler } from './clients.controler';
import { Client } from './clients.interface';
import { TestingModuleHelper } from '../helpers/index';

describe('AppController', () => {
  let clientsControler: ClientsControler;

  beforeEach(async () => {
    const { get } = new TestingModuleHelper<ClientsControler>();
    clientsControler = await get(ClientsControler, ClientsService);
  });

  it('Should return a client', () => {
    const client: Client = {
      id: 'any_id',
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      age: 'any_age',
      gender: 'any_gender',
    };

    expect(clientsControler.findOneClient('1')).toEqual(client);
  });

  it('Should return 10 clients', () => {
    expect(clientsControler.getClients().length).toBe(10);
  });
});
