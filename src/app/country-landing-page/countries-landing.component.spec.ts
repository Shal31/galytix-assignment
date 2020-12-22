import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesLandingComponent } from './countries-landing.component';

describe('CountriesLandingComponent', () => {
  let component: CountriesLandingComponent;
  let fixture: ComponentFixture<CountriesLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
