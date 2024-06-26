import { Observable } from "rxjs";

export interface SharedContract {
    saveDemandeCredit(data: any): Observable<any>;

}
export interface Garantie {
    identif?: string;
    nature?: string; // Changement de Nature à string
    type?: string;
    valeur?: number; // Ajoutez le type correct si la valeur est censée être un nombre
    devise?: string;
  }
  
