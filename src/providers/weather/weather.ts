import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';


@Injectable()
export class WeatherProvider {

  apiKey = 'c34930dc237350e32bd8490c58075ff3';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  }


  getWeather(city){
    console.log(this.url+city+'&APPID='+this.apiKey);
    return this.http.get(this.url+city+'&APPID='+this.apiKey);
    //  .map(res => res.json());
  }
}
