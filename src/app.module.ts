import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { BankerModule } from './banker/banker.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [AdminModule, BankerModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
