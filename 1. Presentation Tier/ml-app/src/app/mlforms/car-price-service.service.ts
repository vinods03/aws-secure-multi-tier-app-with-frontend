import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarPriceModel } from '../models/car-price-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarPriceServiceService {

  private apiUrl = "https://xdy00ni5qi.execute-api.us-east-1.amazonaws.com/prod/mlapps-car-price-to-sqs"
  constructor(private http: HttpClient) { }

  addCar(car: CarPriceModel): Observable<void> {
    // alert('Hellallo')
    return this.http.post<void>(this.apiUrl, car)
  }

}
