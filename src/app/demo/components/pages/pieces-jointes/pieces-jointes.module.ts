import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiecesJointesRoutingModule } from './pieces-jointes-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { PiecesJointesComponent } from './pieces-jointes.component';
import { CreditComponent } from '../credit/credit.component';
import { CreditModule } from '../credit/credit.module';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';


@NgModule({
  declarations: [PiecesJointesComponent],
  imports: [
    CommonModule,
    PiecesJointesRoutingModule,
    FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule,
		FileUploadModule,
	

  
    
  
  ]
})
export class PiecesJointesModule { }

