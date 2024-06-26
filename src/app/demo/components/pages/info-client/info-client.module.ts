import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoClientRoutingModule } from './info-client-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InfoClientComponent } from './info-client.component';
import { RouterModule } from '@angular/router';
import { DemandeCreditComponent } from '../demande-credit/demande-credit.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  imports: [
    CommonModule,
    InfoClientRoutingModule,
 
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    RouterModule,
    AppRoutingModule,   HttpClientModule 
  ,
    ReactiveFormsModule],
  

  declarations: [InfoClientComponent]
})
export class InfoClientModule { }
