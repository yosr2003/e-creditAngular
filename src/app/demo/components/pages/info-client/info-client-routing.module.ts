import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoClientComponent } from './info-client.component';

const routes: Routes = [{path: '', component: InfoClientComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoClientRoutingModule { }
