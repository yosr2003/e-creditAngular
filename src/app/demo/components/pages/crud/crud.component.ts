import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Nature, Type } from '../enumeration';
import { SharedService } from 'src/app/demo/service/shared.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './crud.component.html',
  providers: [MessageService],
})
export class CrudComponent implements OnInit {
  garantieDialog = false;
  deleteGarantieDialog = false;
  deleteGarantiesDialog = false;
  garanties: any[] = [];
  staticGaranties: any[] = []; // Ajout de la liste statique
  garantie: any = {};
  selectedGaranties: any[] = [];
  submitted = false;
  cols: any[] = [];
  i:number=0;
  natureOptions: SelectItem[] = [
    { label: 'Select Nature', value: null },
    { label: 'Caution', value: Nature.Caution },
    { label: 'Hypotheque', value: Nature.Hypotheque },
    { label: 'Nantissement', value: Nature.Nantissement },
  ];
  typeOptions: SelectItem[] = [];

  constructor(private messageService: MessageService, private sharedService:SharedService , private router:Router) {  


  }

  ngOnInit() {
    // Initialisation de garanties et staticGaranties
    this.garanties = [...this.staticGaranties];
    this.cols = [
      { field: 'nature', header: 'Nature' },
      { field: 'type', header: 'Type' },
      { field: 'valeur', header: 'Valeur' },
      { field: 'devise', header: 'Devise' },
    ];
    
  }

  updateTypeOptions() {
    this.typeOptions = [];
console.log(this.garantie.nature.value)
    switch (this.garantie.nature.value) {
      case Nature.Caution:
        this.typeOptions = [
          { label: 'Select Type', value: null },
          { label: 'Caution solidaire', value: Type.CautionSolidaire},
       
        ];
        break;
      case Nature.Hypotheque:
        this.typeOptions = [
          { label: 'Select Type', value: null },
          { label: 'Acte notaire', value: Type.ActeNotaire },
          { label: 'Acte d\'attribution', value: Type.ActeAttribution },
          { label: 'Acte soussigné privé', value: Type.ActeSoussignePrive },
          { label: 'Certificat de possession', value: Type.Certificatdepossession },
        ];
        break;
        case Nature.Nantissement:
          this.typeOptions = [
            { label: 'Select Type', value: null },
            { label: 'Certificat_Depot', value: Type.certficatDepot },
            { label: 'Nant_Materiel', value: Type.NantMateriel },
            { label: 'Nant_FC', value: Type.NantFC },
          ];
          break;
    }
  }
  

  openNew() {
    this.garantie = {};
    this.submitted = false;
    this.garantieDialog = true;
  }

  deleteSelectedGaranties() {
    this.deleteGarantiesDialog = true;
  }

  editGarantie(garantie: any) {
    this.garantie = { ...garantie };
    this.garantieDialog = true;
  }

  deleteGarantie(garantie: any) {
    this.deleteGarantieDialog = true;
    this.garantie = { ...garantie };
  }

  confirmDeleteSelectedGaranties() {
    this.deleteGarantiesDialog = false;

    this.garanties = this.garanties.filter(val => !this.selectedGaranties.includes(val));
    this.staticGaranties = [...this.garanties];

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Garanties Deleted',
      life: 3000,
    });

    this.selectedGaranties = [];
  }

  confirmDeleteGarantie() {
    this.deleteGarantieDialog = false;

    this.garanties = this.garanties.filter(val => val.identif !== this.garantie.identif);
    this.staticGaranties = [...this.garanties];

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Garantie Deleted',
      life: 3000,
    });

    this.garantie = {};
  }

  hideDialog() {
    this.garantieDialog = false;
    this.submitted = false;
  }

  saveGarantie() {
    this.submitted = true;
console.log(this.garantie.identif)
    if (this.garantie.nature && this.garantie.type && this.garantie.devise) {
      
      if (this.garantie.identif != undefined) {

        this.garanties[this.findIndexById(this.garantie.identif)] = { ...this.garantie };
      } else {
        console.log("kaeed yemchil lel else")
        this.garantie.identif = this.i++;
        this.garantie.nature = this.garantie.nature;
        this.garanties.push({ ...this.garantie });
      }

    let list=[]
      this.staticGaranties = [...this.garanties];
      for (let i = 0; i < this.staticGaranties.length; i++) {
        console.log(this.staticGaranties[i])
       let x={
        "id":this.staticGaranties[i].identif,
        "nature":this.staticGaranties[i].nature.value,
   
        "type":"",
   
        "valeur":this.staticGaranties[i].valeur,
        "devise":this.staticGaranties[i].devise

       }

       x.type=this.staticGaranties[i].type,

       list.push(x);

     
     
      }
//sauveagrde--------------------
      this.sharedService.setstaticGaranties([...list]);
      //-------------------------------

      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: this.garantie.identif ? 'Garantie Updated' : 'Garantie Created',
        life: 3000,
      });

      this.garantieDialog = false;
      this.garantie = {};
      this.selectedGaranties = [];
    }
    
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.garanties.length; i++) {
      if (this.garanties[i].identif == id) {
        index = i;
        break;
      }
    }
    return index;
  }

  // createId(): string {
  //   let id = '';
  //   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (let i = 0; i < 5; i++) {
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return id;
  // }

  nextPage() {
    this.router.navigate(['pages/demande-credit/suivi']);
}

prevPage() {
    this.router.navigate(['pages/demande-credit/credit']);
}
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
