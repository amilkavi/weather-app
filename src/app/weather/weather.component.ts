import {Component, OnInit} from '@angular/core';
import {MyResponse} from '../myresponse';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  myresonse: MyResponse;
  isValid = false;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getResponse();

    if ('200' === this.myresonse.cod) {
      this.isValid = true;
    }
  }

  getResponse(): void {
    this.weatherService.getResponse()
      .subscribe(myresponse => this.myresonse = myresponse);
  }

}
