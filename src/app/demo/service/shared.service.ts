import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private creditData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private typeCredit: any;
  private montant:any;
  private nbEcheance:any;
  private unite :any;
  private dossierData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public DemandeData:any;
  private staticGaranties: any[] = [];
  private savedGaranties: any[] = [];
  private DateRelation:any;
  private nomSuivi:any;
  private descripObservation:any;
  private piecesJointes: { nomPiece: string; statut: boolean }[] = [];
  private nombreTotalDemandes:number;
  private nombreTotalClients:number;

  private compte:any;
  private statut:any;

  save(): void {
    this.DemandeData = {
      numeroDemande: 554552,
      dateDemande: new Date(),
      statut:"en cours",
      nomSuivi: this.getnomSuivi(),
      dateRelation: this.getDateRelation(),
      montant: this.getmontant(),
      nbEcheance: this.getnbEcheance(),
      typeCredit: this.getTypeCredit(),
      unite: this.getunite(),
      descripObservation: this.getdescripObservation(),
      compte: this.getcompte(),
      garanties: this.getSavedGaranties(),
      piecesJointes: this.getPiecesJointes(),
    };
    console.log("saved shared data ",this.DemandeData);
    }

    setstatut(statut: any): void {
      this.statut = statut;
    }
  
    getstatut(): any {
      return this.statut;
    }
  


 setPiecesJointes(piecesJointes:any): void {
   this.piecesJointes = piecesJointes;
 }

 getPiecesJointes(): any {
   return this.piecesJointes;
 }
 
 setcompte(compte: any): void {
  this.compte = compte;
}

getcompte(): any {
  return this.compte;
}


  setdescripObservation(descripObservation: any): void {
    this.descripObservation = descripObservation;
  }

  getdescripObservation(): any {
    return this.descripObservation;
  }

 



  setstaticGaranties(staticGaranties: any): void {
    this.staticGaranties = staticGaranties;
  }

  getstaticGaranties(): any {
    return this.staticGaranties;
  }
  setSavedGaranties(savedGaranties: any): void {
    this.savedGaranties = savedGaranties;
  }

  getSavedGaranties(): any {
    return this.savedGaranties;
  }



  setDateRelation(DateRelation: any): void {
    this.DateRelation = DateRelation;
  }

  getDateRelation(): any {
    return this.DateRelation;
  }


  setnomSuivi(nomSuivi: any): void {
    this.nomSuivi = nomSuivi;
  }

  getnomSuivi(): any {
    return this.nomSuivi;
  }



 

  setCreditData(data: any): void {
    console.log('in data',data);
    this.creditData.next(data);
    console.log('next ',this.creditData);
  }

  getCreditData(): Observable<any> {
    console.log('get  ',this.creditData.asObservable());

    return this.creditData.asObservable();
  }

  setDossierData(data: any): void {
    this.dossierData.next(data);
  }

  getDossierData(): Observable<any> {
    console.log(this.dossierData.asObservable().subscribe(data=>console.log(data)));
    return this.dossierData.asObservable();
  }

  setTypeCredit(typeCredit: any): void {
    this.typeCredit = typeCredit;
  }

  getTypeCredit(): any {
    return this.typeCredit;
  }
  setmontant(montant: any): void {
    this.montant = montant;
  }

  getmontant(): any {
    return this.montant;
  }
  setnbEcheance(nbEcheance: any): void {
    this.nbEcheance = nbEcheance;
  }

  getnbEcheance(): any {
    return this.nbEcheance;
  }
  setunite(unite: any): void {
    this.unite = unite;
  }

  getunite(): any {
    return this.unite;
  }

  setnombreTotalDemandes(nb: number): void {
    this.nombreTotalDemandes = nb;
  }

  getnombreTotalDemandes(): any {
    return this.nombreTotalDemandes;
  }


  setnombreTotalClients(nb: number): void {
    this.nombreTotalClients = nb;
  }

  getnombreTotalClients(): any {
    return this.nombreTotalDemandes;
  }



}
