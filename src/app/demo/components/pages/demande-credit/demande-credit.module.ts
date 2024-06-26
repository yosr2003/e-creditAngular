import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';

import { DemandeCreditRoutingModule } from './demande-credit-routing.module';
import { DemandeCreditComponent } from './demande-credit.component';
import { InfoClientComponent } from '../info-client/info-client.component';
import { RouterModule } from '@angular/router';
import { EmptyDemoComponent } from '../empty/emptydemo.component';
import { Timeline } from 'primeng/timeline';
import { TimelineDemoComponent } from '../timeline/timelinedemo.component';
import { CreditComponent } from '../credit/credit.component';
import { GarantieComponent } from '../garantie/garantie.component';
import { SuiviComponent } from '../suivi/suivi.component';
import { PiecesJointesComponent } from '../pieces-jointes/pieces-jointes.component';
import { ObservationComponent } from '../observation/observation.component';
import { CrudComponent } from 'src/app/demo/components/pages/crud/crud.component';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,

    TabMenuModule,
    StepsModule,
    TieredMenuModule,
 
    ButtonModule,
    ContextMenuModule,
    MegaMenuModule,
    PanelMenuModule,
    InputTextModule,
    DemandeCreditRoutingModule,
  	RouterModule.forChild([
      
			{
				path: '', component: DemandeCreditComponent, children: [
					{ path: '', redirectTo: 'demande', pathMatch: 'full' },
          { path: 'demande', component: InfoClientComponent },
					{ path: 'infoClient', component: InfoClientComponent },
          { path: 'credit', component: CreditComponent },
          { path: 'garantie', component: CrudComponent },
          { path: 'suivi', component: SuiviComponent },
          { path: 'pieces', component: PiecesJointesComponent },
          { path: 'observation', component: ObservationComponent },
			
				]
			}
		])

  ],
  declarations: [DemandeCreditComponent],
})
export class DemandeCreditModule { }
