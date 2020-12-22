import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { MyOwnCustomMaterialModuleModule } from './/my-own-custom-material-module.module';
import { CountryGridComponent } from './country-grid/country-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { CountriesLandingComponent } from './country-landing-page/countries-landing.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    CountriesLandingComponent,
    CountryGridComponent,
    WeatherPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MyOwnCustomMaterialModuleModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
