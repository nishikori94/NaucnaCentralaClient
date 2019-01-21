import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface UrlResponse {
  id?: number;
  url: string;
}

export interface PaymentMethod {
  id?: number;
  name: string;
  naziv: string;
  url: string;
}

export interface Casopis {
  id?: number;
  naziv: string;
  merchantId: string;
  cena: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  
  constructor(private http: HttpClient) { }

  getAllCasopisi(): Observable<Casopis[]> {
    return this.http.get<Casopis[]>(`https://localhost:9095/casopis/getAllCasopisi`);
  }

  kupiCasopis(id: number): Observable<UrlResponse>{
    return this.http.get<UrlResponse>(`https://localhost:9095/casopis/sacuvajPorudzbinu/`+id)
  }
}
