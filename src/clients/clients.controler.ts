import { Controller, Get, Param } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.interface';

@Controller('clients')
export class ClientsControler {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  getClients(): Array<Client> {
    return this.clientsService.getClients();
  }

  @Get(':id')
  findOneClient(@Param('id') id: string): Client {
    return this.clientsService.findOneClient(id);
  }
}
