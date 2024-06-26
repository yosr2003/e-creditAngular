// Mettez à jour votre modèle de document
interface Document {
  name: string;
  required: boolean;
  nomPiece?: string;
  statut?: boolean;
  
   // Changez le type de statut à boolean
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DemandeCreditService } from 'src/app/demo/service/demande-credit.service';
import { SharedService } from 'src/app/demo/service/shared.service';


@Component({
  selector: 'app-pieces-jointes',
  templateUrl: './pieces-jointes.component.html',
  styleUrls: ['./pieces-jointes.component.scss']
})
export class PiecesJointesComponent implements OnInit {
  documents: Document[] = [];
  piecesJointes: { nomPiece: string; statut: boolean }[] = []; 
  creditForm!: FormGroup;
  dossier: any;
  submitted: boolean=false;
  selectedFiles: File[] = [];
  


  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, private route:Router , private demandeCreditservice:DemandeCreditService) {}

  ngOnInit(): void {
    this.creditForm = this.formBuilder.group({
      typeCredit: ['']
    });

    this.creditForm.get('typeCredit')?.valueChanges.subscribe(() => {
      this.updateRequiredDocuments();
    });

    this.sharedService.getDossierData().subscribe((data) => {
      console.log('received data', data);
      this.dossier = data;
      console.log('dossier', this.dossier);
      this.updateRequiredDocuments(); 
    });

    this.creditForm.get('file')?.valueChanges.subscribe(() => {
      this.upload();
    });
  }

  updateRequiredDocuments() {
    console.log('Type Credit:', this.dossier?.typeCredit);

    switch (this.dossier?.typeCredit) {
      case 'creditConsommation':
        this.documents = [
          { name: 'Bulletin de paie', required: true, nomPiece: '', statut: false },
          { name: 'CIN', required: true, nomPiece: '', statut: false },
          { name: 'Passeport', required: false, nomPiece: '', statut: false },
        ];
        break;
      case 'pretTemperament':
        this.documents = [
          { name: 'Relevé d\'identité bancaire', required: true, nomPiece: '', statut: false },
          { name: 'Justificatif de situation familiale', required: false, nomPiece: '', statut: false }
        ];
        break;
      default:
        this.documents = [];
        break;
    }

    console.log('Updated Documents:', this.documents);
  }

  getSelectedDocuments(): { nomPiece: string; statut: boolean }[] {
    return this.documents
      .filter(document => document.statut === true)
      .map(document => ({ nomPiece: document.name, statut: document.required || false }));
  }

  upload() {
   let l=[];
   this.saveCollaborateur();
    let selectedDocuments = this.getSelectedDocuments();
    for(let i=0; i<selectedDocuments.length; i++) {
    l.push({nomPiece: selectedDocuments[i].nomPiece, statut:selectedDocuments[i].statut, data:"", type:this.selectedFiles[i].type,filePath:"",name:this.selectedFiles[i].name})
    }
    this.sharedService.setPiecesJointes(l);
    console.log("seeeeeeeeeelected:",selectedDocuments)
   
    
  }


  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  seletedFile(event : any): void {

    for (let file of event.files) {    

      this.selectedFiles.push(file);

    }

  }

  removeFile(event : any){

    this.selectedFiles = this.selectedFiles.filter((f:any)=>f!=event.file)

  }

 

 

  saveCollaborateur(){

    this.submitted = true;

    console.log("files", this.selectedFiles)

    const formData = new FormData();

    for(let file of this.selectedFiles ){

      formData.append('files',file);
      console.log("vfbghn",formData.get('files'))

    }

    formData.append('json',new Blob([JSON.stringify(this.creditForm.value)], {type :"application/json"}));

    this.demandeCreditservice.savePiece(formData).subscribe({

      next : data =>{

        console.log(data);

       

          },

    error : error =>{



        console.log(error);

    }

  })

  }
  



nextPage() {
  this.submitted = true; 

      this.route.navigate(['/pages/demande-credit/observation']);
 
}

prevPage() {
  this.route.navigate(['/pages/demande-credit/suivi']);
}




}
