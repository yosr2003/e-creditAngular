import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DossierCreditService } from 'src/app/demo/service/dossier-credit.service';
import { TypeCredit, Unite } from '../enumeration';
import { SharedService } from 'src/app/demo/service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {

  creditForm!: FormGroup;
  typesCredit = Object.values(TypeCredit);
  unites = Object.values(Unite);
  a: any;
  dossier: any;
  typeCredit:any;
  unite:any;
  montant: any;
  nbEcheance: any;
  submitted: boolean=false;
  

  constructor(
    private formBuilder: FormBuilder,
    private dossierCredit: DossierCreditService,
    private sharedService: SharedService, private router:Router
  ) {}

  ngOnInit(): void {
    this.creditForm = this.formBuilder.group({
      montant: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      nbEcheance: [''],
      typeCredit: ['', Validators.required],
      unite: ['', Validators.required] // Add unite control to the form
    });
  
    this.creditForm.valueChanges.subscribe(() => {
      this.calculateNbEcheance();
    });

 
  
  }

// credit.component.ts
sendType() {
  const typeCredit = this.creditForm.get('typeCredit')?.value;
  console.log('Envoi du type de crédit :', typeCredit);

  const creditData = this.getCreditt();
  this.sharedService.setCreditData(creditData);
  this.sharedService.setDossierData(creditData);

  this.sharedService.setTypeCredit(typeCredit);
}


  getDossier() {
    this.dossier = this.sharedService.getCreditData();
    console.log('Dossier récupéré depuis le service :', this.dossier);
  }

  calculateNbEcheance() {
    const montant = parseFloat(this.creditForm.get('montant')?.value || '0');
    const type = this.creditForm.get('typeCredit')?.value as TypeCredit;
    const unite = this.creditForm.get('unite')?.value as Unite;

    let pourcentage = 1.0;

    if (type === TypeCredit.CreditConsommation) {
      pourcentage = 1.15;
    } else if (type === TypeCredit.PretTemperament) {
      pourcentage = 1.20;
    }

    switch (unite) {
      case Unite.Mensuelle:
        pourcentage /= 12;
        break;
      case Unite.Trimestrielle:
        pourcentage /= 3;
        break;
      case Unite.Semestrielle:
        pourcentage /= 6;
        break;
      // Ajoutez d'autres cas si nécessaire
    }

    const nbEcheance = (montant * pourcentage).toFixed(2);
    this.creditForm.get('nbEcheance')?.setValue(Number(nbEcheance), { emitEvent: false });


    this.sharedService.setTypeCredit(this.creditForm.get('typeCredit')?.value);
   
    this.sharedService.setmontant(this.creditForm.get('montant')?.value);
    this.sharedService.setnbEcheance(this.creditForm.get('nbEcheance')?.value);
    this.sharedService.setunite(this.creditForm.get('unite').value);
 
  }

  // onSubmit() {
  //   const montant = this.creditForm.get('montant')?.value;
  //   const nbEcheance = this.creditForm.get('nbEcheance')?.value;
  //   const typeCredit = this.creditForm.get('typeCredit')?.value;
  //   const unite = this.creditForm.get('unite')?.value;

  //   if (montant !== null && nbEcheance !== null && montant > 0 && nbEcheance > 0) {
  //     const formData = {
  //       montant: parseInt(montant, 10),
  //       nbEcheance: parseFloat(nbEcheance),
  //       typeCredit: typeCredit,
  //       unite: unite
  //     };

  //     this.dossierCredit.createNewDossier(formData).subscribe({
  //       next: (response: any) => {
  //         console.log('Données enregistrées avec succès', response);
  //         this.creditForm.reset();
  //       },
  //       error: error => {
  //         console.error('Erreur lors de l\'enregistrement des données', error);
  //       }
  //     });
  //   } else {
  //     console.error('Veuillez remplir les champs correctement.');
  //   }
  //   this.getCreditt();
  // }

  getCreditt() {
    console.log('gettttttttttttttt');
    console.log(this.creditForm.value);
    return this.creditForm.value;
  }


  nextPage() {
    this.submitted = true; // Marquer le formulaire comme soumis

    // Vérifier si le formulaire est valide
    if (this.creditForm.valid) {
        // Naviguer vers la page suivante si le formulaire est valide
        this.router.navigate(['/pages/demande-credit/garantie']);
    } else {
        // Faire quelque chose si le formulaire n'est pas valide, par exemple, afficher un message d'erreur
        console.log("Le formulaire n'est pas valide. Veuillez remplir tous les champs obligatoires.");
        // Vous pouvez également marquer les champs comme touchés pour afficher les messages d'erreur si nécessaire
        this.creditForm.markAllAsTouched();
    }
}

prevPage() {
    this.router.navigate(['/pages/demande-credit/infoClient']);
}

}
