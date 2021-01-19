import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = "https://restcountries.eu/rest/v2";
  constructor(private httpClient: HttpClient) { }

  
  //Return a All Country List 
  getAllCountries() {
    return this.httpClient.get(`${this.API_URL}/all`)
  }

  getWeather(capitalCodeString:string) {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=`+capitalCodeString+'&APPID=UseYourCreatedAppID')
  } 

}
