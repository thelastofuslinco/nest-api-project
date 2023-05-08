import { Test, TestingModule } from '@nestjs/testing';

export class TestingModuleHelper<T> {
  async get(controler, service): Promise<T> {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [controler],
      providers: [service],
    }).compile();

    return app.get<T>(controler);
  }
}
