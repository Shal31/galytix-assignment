import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-landing',
  templateUrl: './countries-landing.component.html',
  styleUrls: ['./countries-landing.component.css']
})
export class CountriesLandingComponent implements OnInit {
  private countries:  Array<object> = [];
  isListView : boolean =false;
  constructor(private apiService: ApiService, private router : Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
   }

  ngOnInit() {
    this.getCountries();
  }

  onViewChange(){
    this.isListView = ! this.isListView;
    if(this.isListView){
      this.router.navigateByUrl('/countries/list')
    }
    else{
      this.router.navigateByUrl('/countries/grid')
    }
  }

  public getCountries () {
    this.apiService.getAllCountries().subscribe((data: Array<object>) => {
      this.countries = data;
      for (let i = 0; i < this.countries.length; i++) {
        console.log(i + ' -'  + this.countries[i]['name']);
      }
    });
  }

  
}
