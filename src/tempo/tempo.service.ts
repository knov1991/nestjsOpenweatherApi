import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class TempoService {
  constructor(private httpService: HttpService) {}

  async getTempo(params) {
    let tempo = [];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${params.cidade}&appid=2394cec54383e41f63d67b88b1a3eabb`;

    //const { status, data } = await this.httpService.get(url).toPromise();
    const { status, data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      ),
    );

    if (status === 200) {
      tempo = data;
    }
    return tempo;
  }
}
