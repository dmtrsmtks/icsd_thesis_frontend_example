import { Component, OnInit } from '@angular/core';
import {Country} from '../country';
import {CountryServiceService} from '../country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryServiceService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.countryService.findAll().subscribe(data => {
      this.countries = data;
    });
  }

}
