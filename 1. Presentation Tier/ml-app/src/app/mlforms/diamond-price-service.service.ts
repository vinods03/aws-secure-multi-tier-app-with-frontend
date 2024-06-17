import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiamondPriceModel } from '../models/diamond-price-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiamondPriceServiceService {

  private apiUrl = "https://xdy00ni5qi.execute-api.us-east-1.amazonaws.com/prod/mlapps-diamond-price-to-sqs"
  // private apiGetUrl = "https://xdy00ni5qi.execute-api.us-east-1.amazonaws.com/prod/mlapps-diamond-price-to-sqs/{run_id}"
  constructor(private http: HttpClient) { }

  // add using API
  // addReservation(reservation:  Reservation) : Observable<void> {
  //   return this.http.post<void>(this.apiUrl+"/reservations/", reservation)
  //  }

  addDiamond(diamond: DiamondPriceModel): Observable<void> {
    // alert('Reached the service')
    // alert(diamond.carat)
    return this.http.post<void>(this.apiUrl, diamond)
  }

  getDiamonds(): Observable<DiamondPriceModel[]> {
    // alert('got here')
    return this.http.get<DiamondPriceModel[]>(this.apiUrl)
  }

  getDiamond(run_id: number): Observable<DiamondPriceModel> {
    // alert(this.apiUrl+"/"+run_id)
    return this.http.get<DiamondPriceModel>(this.apiUrl+"/"+run_id)
  }
}

