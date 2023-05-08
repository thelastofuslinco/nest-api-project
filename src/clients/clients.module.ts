import { Module } from '@nestjs/common';
import { ClientsControler } from './clients.controler';
import { ClientsService } from './clients.service';

@Module({
  imports: [],
  controllers: [ClientsControler],
  providers: [ClientsService],
})
export class ClientsModule {}
