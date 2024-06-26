import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service';
import { DemandeCreditService } from 'src/app/demo/service/demande-credit.service';
import { GarantiesService } from 'src/app/demo/service/garanties.service';
import { SharedService } from 'src/app/demo/service/shared.service';
import { Garantie } from 'src/app/garantie';

@Component({
  selector: 'app-demande-credit',
 
  templateUrl: './demande-credit.component.html',
  styleUrl: './demande-credit.component.scss'
})
export class DemandeCreditComponent {
  constructor(private demandeService: DemandeCreditService,
  private sharedService: SharedService,private ganartiesService : GarantiesService, private authService: AuthService,private router: Router){}

routeItems: any;
isVisible: boolean = false;
  

  ngOnInit() {
   

      



      this.routeItems = [
          { label: 'InfoClient', routerLink: 'infoClient' },
          { label: 'Dossier-Credit', routerLink: 'credit' },
          { label: 'Garanties-Proposées', routerLink: 'garantie' },  
              { label: 'suivi', routerLink: 'suivi' },
          { label: 'Pieces-Jointes', routerLink: 'pieces' },
          { label: 'Observations', routerLink: 'observation' },
    
      
       
      ];

     }

     isObservationsPage(): boolean {
      return this.router.url.includes('observation');
  }

     save() {

     
      const garanties : [] = this.sharedService.getstaticGaranties();
      // garanties.forEach(element => {
      //   console.log(element)
      //      this.ganartiesService.addGarantie(element).subscribe(
      //       {
              // next: (response : Garantie) => {
                this.sharedService.setSavedGaranties(garanties); 
                this.sharedService.save();
                console.log("details demande",this.sharedService.DemandeData);
                this.demandeService.saveDemandeCredit(this.sharedService.DemandeData).subscribe(
                  { 
                    next : (res)  =>  {
                        console.log('ssaved demande test :',res);
                    },error : (error)  => {
                      console.error('Erreur lors de l\'enregistrement des données', error);

                    }
                  }
                );               
      //         },
      //         error: (error) => {
      //           console.error('Erreur lors de l\'enregistrement des données', error);
      //         }
      //       }
      //     )
      // });
    }

   

  logout(): void {
    // this.authService.logout();
  }

}
