import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { InfraModule } from './infra/infra.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), InfraModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
