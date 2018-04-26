export class MyResponse {
  message: string;
  cod: string;
  city_id: number;
  calctime: number;
  cnt: number;
  list: WeatherData[];

}

export class WeatherData {

  main: MainWeather;
  wind: Wind;
  clouds: Clouds;
  weather: Weather[];
  rain: Rain;
  dt: number;
}

export class MainWeather {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;

}

export class Wind {
  speed: number;
  deg: number;

}

export class Clouds {
  all: number;
}

export class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class Rain {
  ThreeH: number;
}
