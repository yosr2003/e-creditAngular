import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarantieComponent } from './garantie.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: GarantieComponent }
	])],
  exports: [RouterModule]
})
export class GarantieRoutingModule { }
