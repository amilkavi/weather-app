import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MyResponse} from './myresponse';
import {SERVER_RESPONSE} from './mock-data';

@Injectable()
export class WeatherService {

  constructor() {
  }

  getResponse(): Observable<MyResponse> {
    return of(SERVER_RESPONSE);
  }


}
