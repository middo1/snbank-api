import { Injectable } from '@nestjs/common';

@Injectable()
export class BankerService {
  getHello(): string {
    return 'Hello World!';
  }
}
