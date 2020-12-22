import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {

  constructor(private apiService: ApiService,private router : Router, private route: ActivatedRoute) { }
  resultFound: boolean;
  location:string;
  currentWeather : any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.location = params['location'];
     this.getWeather(this.location);
  });

 
  }
  gridView(){
    this.router.navigateByUrl('/countries/grid');
  }
  listView(){
    this.router.navigateByUrl('/countries/list');
  }
  getWeather(location: string){
    this.apiService.getWeather(location).subscribe((res: Response) => {
      this.resultFound= true;
      this.currentWeather = res;
      console.log(res);
    },(error => {
      this.resultFound= false;
    }      
    ));
  }
    



}
