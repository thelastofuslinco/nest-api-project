import { Injectable } from '@nestjs/common';
import { Client } from './clients.interface';

@Injectable()
export class ClientsService {
  getClients(): Array<Client> {
    const client: Client = {
      id: 'any_id',
      name: 'any_name',
      email: 'any_email',
      phone: 'any_phone',
      age: 'any_age',
      gender: 'any_gender',
    };
    return Array.from({ length: 10 }, (_, i) => i + 1).map(() => client);
  }
}
