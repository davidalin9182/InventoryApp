import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  public apiUrl = 'http://localhost:4200/api/v1';

  constructor(public http: HttpClient) { }

  getSomeData() {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }

  
}
