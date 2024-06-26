import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DossierCreditService {

  private baseUrl =  environment.baseUrl +'DossierCredit';

  constructor(private httpClient: HttpClient) { }

  getAllDossiers(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  createNewDossier(data: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, data); 
    //demandedata=data
  }

 

  
}
