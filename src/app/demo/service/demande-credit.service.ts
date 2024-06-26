import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { environment } from 'src/environments/environment';
import { AuthInterceptorService } from './auth-interceptor.service';


@Injectable({
  providedIn: 'root'
})
export class DemandeCreditService {
  result:any
  private apiUrl =  environment.baseUrl+'/demandes-credit';
  private api='http://localhost:8085/PiecesJointes/upload';

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getAllDemandesCredit(): Observable<any[]> {
   
    return this.http.get<any[]>(this.apiUrl);
  }
    DemandeData = this.sharedService.DemandeData;
  saveDemandeCredit(DemandeData: any): Observable<any> {

    return this.http.post<any>(this.apiUrl, DemandeData);
  }


  updateStatut(demandeId: number, newStatut: string): Observable<any> {
    const updateUrl = `${this.apiUrl}/${demandeId}/${newStatut}`; 
    const updateData = { statut: newStatut };  

    return this.http.put(updateUrl, updateData);
  }
  // getClientNameByCompteId(compteId: number): Observable<string> {
  //   this.result=this.http.get<string>(`${this.apiUrl}/clients/compte/${compteId}`)
  //   return  this.result;
  // }

  getClientNameByCompteId(compteId: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/clients/compte/${compteId}`, { responseType: 'text' as 'json' });
  }

  savePiece(formData: FormData): Observable<any> {
    return this.http.post<any>(this.api, formData);
  }
  

  



}
