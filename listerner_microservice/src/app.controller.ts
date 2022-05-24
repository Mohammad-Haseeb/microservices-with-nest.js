import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @EventPattern('name')
  getHello(data: string): string {
    console.log('check ', data);
    return this.appService.getHello();
  }
}
