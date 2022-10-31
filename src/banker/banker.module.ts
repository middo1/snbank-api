import { Module } from '@nestjs/common';
import { BankerService } from './banker.service';
import { BankController } from './banker.controller';

@Module({
  imports: [],
  controllers: [BankController],
  providers: [BankerService]
})
export class BankerModule {}
