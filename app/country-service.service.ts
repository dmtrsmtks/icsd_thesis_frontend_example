import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private FIND_ALL_URL: string;
  private CREATE_COUNTRY_URL: string;

  constructor(private http: HttpClient) {
    this.FIND_ALL_URL = 'http://127.0.0.1:8080/icsd-aegean/api/countries/all';
    this.CREATE_COUNTRY_URL = 'http://127.0.0.1:8080/icsd-aegean/api/countries/';
  }

  public findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.FIND_ALL_URL);
  }

  // tslint:disable-next-line:typedef
  public save(country: Country) {
    return this.http.post<Country>(this.CREATE_COUNTRY_URL, country);
  }
}
