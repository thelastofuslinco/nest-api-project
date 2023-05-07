import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { ClientsControler } from './clients.controler';

describe('AppController', () => {
  let clientsControler: ClientsControler;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientsControler],
      providers: [ClientsService],
    }).compile();

    clientsControler = app.get<ClientsControler>(ClientsControler);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clientsControler.getHello()).toBe('Hello World!');
    });
  });
});
