import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  @Render('home')
  getHello() {
    // port from .env file
    const port = this.configService.get('PORT');
    console.log('port', port);

    // return this.appService.getHello();
  }
}
