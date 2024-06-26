import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MessageService, ConfirmationService } from 'primeng/api';
import { DemandeCreditService } from 'src/app/demo/service/demande-credit.service';
import { SharedService } from 'src/app/demo/service/shared.service';
import { demandeDto } from './demandeDto';
import { AuthService } from 'src/app/demo/service/auth.service';

@Component({
    templateUrl: './tabledemo.component.html',
    providers: [MessageService, ConfirmationService],
})
export class TableDemoComponent implements OnInit {
    demandesCredits: any[] = [];
    loading: boolean = true;
    demandeForm: FormGroup;
    demandeDto: demandeDto[] = [];
    nombreTotalDemandes: number = 0;
    

    isAdmin: boolean = true; 

    constructor(
        private demandeCreditService: DemandeCreditService,
        private sharedService: SharedService,
        private formBuilder: FormBuilder,
        private authService:AuthService
    ) {}

    ngOnInit() {

        
    this.isAdmin = this.authService.isAdmin();
        this.demandeForm = this.formBuilder.group({
            check: [''],
            statut: [''],
        });

        this.demandeCreditService.getAllDemandesCredit().subscribe((demandesCredits) => {
            this.demandesCredits = demandesCredits;
            this.loading = false;
            this.nombreTotalDemandes = this.demandesCredits.length;
            this.sharedService.setnombreTotalDemandes(this.nombreTotalDemandes);
            // Récupération des noms des clients pour chaque demande de crédit
            this.demandesCredits.forEach((demande, index) => {
                this.demandeCreditService.getClientNameByCompteId(demande.compte.idCompte)
                    .subscribe((nomClient) => {
                        this.demandeDto.push({
                            idDemandeCredit: demande.idDemandeCredit,
                            nomClient: nomClient,
                            typeCredit: demande.typeCredit,
                            dateDemande: demande.dateDemande,
                            statut: demande.statut // Assurez-vous de récupérer le statut de la demande
                        });

                        // Vérification si tous les noms des clients sont récupérés
                        if (this.demandeDto.length === this.demandesCredits.length) {
                            console.log('Liste des demandes de crédit avec noms des clients:', this.demandeDto);
                        }
                    });
            });
        });

        this.sharedService.getstatut().subscribe((statut) => {
            this.demandeForm.patchValue({ statut });
            this.loading = false;
        });
    }

    updateStatut(demandeCredit: any, newStatut: string) {
        const selectedDemande = this.demandesCredits.find(
            (d) => d.idDemandeCredit === demandeCredit.idDemandeCredit
        );

        if (selectedDemande) {
            selectedDemande.statut = newStatut;

            // Mise à jour du statut et récupération du nom du client
            this.demandeCreditService.updateStatut(selectedDemande.idDemandeCredit, newStatut)
                .subscribe({
                    next: (response) => {
                        console.log('Status updated successfully', response);

                        // Mise à jour du nom du client après la modification du statut
                        this.demandeCreditService.getClientNameByCompteId(selectedDemande.compte.idCompte)
                            .subscribe((nomClient) => {
                                selectedDemande.nomClient = nomClient;
                            });
                    },
                    error: (error) => {
                        console.error('Error updating status:', error);
                    },
                });
        } else {
            console.error('Demande not found');
        }
    }
}








