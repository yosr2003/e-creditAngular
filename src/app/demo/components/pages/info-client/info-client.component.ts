import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/demo/service/client.service';
import { Devise } from '../enumeration';
import { SharedService } from 'src/app/demo/service/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss']
})
export class InfoClientComponent implements OnInit {
  dropdownItems: any;
  selectedState: any;
  clientForm!: FormGroup;
  comptes: any[] = [];
  infoclient:any
  cin: any;
  numCompte: any;
  DateOuv: any;
  compte:any;
  submitted: boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService, private sharedservice:SharedService,private router:Router

  ) { }

  ngOnInit(): void {

    this.dropdownItems = Object.values(Devise).map(devise => ({ name: devise }));
    this.clientForm = this.formBuilder.group({
      cin: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      nomClient: ['',[Validators.required]],
      prenomClient: ['' ,[Validators.required]],
      dateNais: ['' ,[Validators.required]],
      situation: ['' ,[Validators.required]],
      selectedCompte: ['' ,[Validators.required]],
      DateOuv: ['' ,[Validators.required]],
      devise:['' ,[Validators.required]]
    });


    this.numCompte=this.clientForm.get("selectedCompte")?.value;
    
    this.DateOuv=this.clientForm.get("dateOuv")?.value;

    this.compte={
      numCompte : this.numCompte ,
      DateOuv : this.DateOuv
    }
    
  }

  updateInfoClient() {
    const cin = this.clientForm.get('cin')?.value;
    this.clientService.getClientByCIN(cin).subscribe(data => {
      console.log("data",data.dateNais);
      this.clientForm.patchValue({
        nomClient: data.nomClient,
        prenomClient: data.prenomClient,
       
        situation: data.situation,
        dateNais: data.dateNais,
      });

       console.log(data.dateNais)
    });
   


    this.clientService.getComptesByCIN(cin).subscribe(comptes => {
      this.comptes = comptes;
    
    
      const selectedCompteControl = this.clientForm.get('selectedCompte');
      if (selectedCompteControl) {
        if (this.comptes.length > 0) {
          selectedCompteControl.setValue(this.comptes[0].idCompte);
        } else {
          selectedCompteControl.setValue(null);
        }
      }})


    
  }

  chooseNum(index: any) {
    console.log('chooseNum', index);
    const selectedCompteId = index;
    console.log('ouv',selectedCompteId.dateOuv)
    this.clientForm.patchValue({
     
      'devise': selectedCompteId.devise,
      'DateOuv': selectedCompteId.dateOuv
    });
    console.log("eeeeeeee",this.DateOuv)
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    this.infoclient= this.clientForm.value
    console.log(this.infoclient)
console.log("coooooooooompte" ,this.compte)
    this.sharedservice.setcompte(index);
  }



  nextPage() {
    this.submitted = true; // Marquer le formulaire comme soumis

    // Vérifier si le formulaire est valide
    if (this.clientForm.valid) {
        // Naviguer vers la page suivante si le formulaire est valide
        this.router.navigate(['/pages/demande-credit/credit']);
    } else {
        // Faire quelque chose si le formulaire n'est pas valide, par exemple, afficher un message d'erreur
        console.log("Le formulaire n'est pas valide. Veuillez remplir tous les champs obligatoires.");
        // Vous pouvez également marquer les champs comme touchés pour afficher les messages d'erreur si nécessaire
        this.clientForm.markAllAsTouched();
    }
}

// prevPage() {
//     this.router.navigate(['/pages/demande-credit/infoClient']);
// }
  
}











