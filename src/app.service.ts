import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getTempo(params) {
    let tempo = [];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${params.cidade}&appid=2394cec54383e41f63d67b88b1a3eabb`;

    //const { status, data } = await this.httpService.get(url).toPromise();
    const { status, data } = await firstValueFrom(this.httpService.get(url));
    if (status === 200) {
      tempo = data;
    }
    return tempo;
  }

  async getHello() {
    return 'Hello World!';
  }
}
