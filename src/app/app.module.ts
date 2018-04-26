import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {MessageService} from './message.service';
import {MessagesComponent} from './messages/messages.component';

import {AppRoutingModule} from './app-routing.module';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    WeatherComponent
  ],
  providers: [MessageService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
