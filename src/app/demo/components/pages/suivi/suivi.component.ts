import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/demo/service/client.service';
import { SharedService } from 'src/app/demo/service/shared.service';


@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.scss']
})
export class SuiviComponent implements OnInit {
  dropdownItems: any;
  selectedState: any;
  clientForm!: FormGroup;
  comptes: any[] = [];
  DateRelation: any; // Pas besoin d'initialiser ici
  nomSuivi: any; // Pas besoin d'initialiser ici
  submitted: boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService, private sharedService:SharedService,private router:Router
  ) { }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      nomSuivi: ['',[Validators.required]],
      DateRelation: ['',[Validators.required]]
    });



    this.clientForm.valueChanges.subscribe(formValue => {
      this.nomSuivi = formValue.nomSuivi;
      this.DateRelation = formValue.DateRelation;

      // Utilisez le service partagé pour stocker les valeurs
      this.sharedService.setnomSuivi(this.nomSuivi);
      this.sharedService.setDateRelation(this.DateRelation);
    });
    
  }

  // Vous pouvez utiliser ces valeurs dans d'autres méthodes du composant si nécessaire
  // onSaveButtonClick(): void {
  //   this.nomSuivi = this.clientForm.get('nomSuivi')?.value;
  //   this.DateRelation = this.clientForm.get('DateRelation')?.value;

  
  // }




  
  nextPage() {
    this.submitted = true; // Marquer le formulaire comme soumis

    // Vérifier si le formulaire est valide
    if (this.clientForm.valid) {
        // Naviguer vers la page suivante si le formulaire est valide
        this.router.navigate(['/pages/demande-credit/pieces']);
    } else {
        // Faire quelque chose si le formulaire n'est pas valide, par exemple, afficher un message d'erreur
        console.log("Le formulaire n'est pas valide. Veuillez remplir tous les champs obligatoires.");
        // Vous pouvez également marquer les champs comme touchés pour afficher les messages d'erreur si nécessaire
        this.clientForm.markAllAsTouched();
    }
}

prevPage() {
    this.router.navigate(['/pages/demande-credit/garantie']);
}
}
