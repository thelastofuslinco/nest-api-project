import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { PhotoModule } from './photo/photo.module';
@Module({
  imports: [ClientsModule, PhotoModule],
})
export class AppModule {}
