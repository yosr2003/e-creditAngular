import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Garantie } from 'src/app/garantie';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GarantiesService {
  private baseUrl = environment.baseUrl+'/garanties';

  constructor(private httpClient: HttpClient) { }

  getAllGaranties(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  getGarantieById(id: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<any>(url);
  }

  addGarantie(garantie: Garantie): Observable<Garantie> {
    return this.httpClient.post<Garantie>(this.baseUrl, garantie);
  }

  editGarantie(id: any, garantie: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.put<any>(url, garantie);
  }

  deleteGarantie(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
