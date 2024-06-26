import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private baseUrl = 'http://localhost:8080'; 

  // constructor(private http: HttpClient) { }

  // getData(): Observable<any> {
  
  //   const token = localStorage.getItem('token');

  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.get<any>(`${this.baseUrl}/data`, { headers });
  // }
}
