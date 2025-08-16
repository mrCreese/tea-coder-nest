import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LinkModule } from './link/link.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [AuthModule, LinkModule, StatisticsModule],
})
export class ApiModule {}
