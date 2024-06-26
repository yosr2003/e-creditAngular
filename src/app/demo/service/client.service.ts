import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl =  environment.baseUrl+'/clients';

  constructor(private httpClient: HttpClient) { }

  getAllClients(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getClientByCIN(cin: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${cin}`);
  }
  getComptesByCIN(cin: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/comptes/byCIN/${cin}`);
  }

  getComptes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/comptes`);
  }
  getCompteByNumCompte(numCompte: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/compte/byNumCompte/${numCompte}`);
  }

  getNomClientByCompteId(compteId: number): Observable<string> {
    return this.httpClient.get<string>(`${this.baseUrl}/clients/compte/${compteId}`);
  }
}
