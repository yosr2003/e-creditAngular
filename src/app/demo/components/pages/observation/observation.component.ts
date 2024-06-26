// observation.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeCreditService } from 'src/app/demo/service/demande-credit.service';
import { SharedService } from 'src/app/demo/service/shared.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss']
})
export class ObservationComponent implements OnInit {
  observation!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private demandeService: DemandeCreditService,
    private sharedService: SharedService, private route:Router
  ) {}

  ngOnInit(): void {
    this.observation = this.fb.group({
      descripObservation: ['']
    });

    this.observation.get('descripObservation')?.valueChanges.subscribe(descripObservation => {
      this.sharedService.setdescripObservation(descripObservation);
    });
  }

  save() {
   this.sharedService.setdescripObservation(this.observation.get('descripObservation').value);
  }

  prevPage() {
    this.route.navigate(['/pages/demande-credit/pieces']);
}
  
}
