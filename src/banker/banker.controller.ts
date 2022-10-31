import { Controller, Get } from '@nestjs/common';
import { BankerService } from './banker.service';

@Controller('banker')
export class BankController {
  constructor(private readonly bankerService: BankerService) {}

  @Get()
  getHello(): string {
    return this.bankerService.getHello();
  }
}
