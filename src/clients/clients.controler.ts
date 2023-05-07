import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.interface';

@Controller('clients')
export class ClientsControler {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  getClients(): Array<Client> {
    return this.clientsService.getClients();
  }
}
