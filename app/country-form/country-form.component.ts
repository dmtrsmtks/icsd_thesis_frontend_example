import { Component, OnInit } from '@angular/core';
import {Country} from '../country';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryServiceService} from '../country-service.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent  {

  country: Country;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryServiceService) {
    this.country = new Country();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.countryService.save(this.country).subscribe(result => this.gotoCountryList());
  }

  // tslint:disable-next-line:typedef
  gotoCountryList() {
    this.router.navigate(['/countries']);
  }

}
