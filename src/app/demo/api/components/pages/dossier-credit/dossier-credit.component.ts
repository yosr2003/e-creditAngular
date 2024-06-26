import { Component } from '@angular/core';

@Component({
  selector: 'app-dossier-credit',
  standalone: true,
  imports: [],
  templateUrl: './dossier-credit.component.html',
  styleUrl: './dossier-credit.component.scss'
})
export class DossierCreditComponent {
  getCredit(): any {
    throw new Error('Method not implemented.');
  }

}
