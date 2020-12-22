import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryGridComponent } from './country-grid/country-grid.component';
import { CountriesLandingComponent } from './country-landing-page/countries-landing.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries/grid', pathMatch: 'full' },
  { path: 'countries', component: CountriesLandingComponent ,
  children: [
    { path: '', redirectTo: 'grid', pathMatch: 'full' },
    { path: 'grid', component: CountryGridComponent },
    { path: 'list', component: CountriesListComponent }]},
  { path: 'weather/:location', component: WeatherPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
