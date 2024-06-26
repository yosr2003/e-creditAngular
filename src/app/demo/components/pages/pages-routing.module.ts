import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoClientModule } from './info-client/info-client.module';
import { DemandeCreditModule } from './demande-credit/demande-credit.module';
import { AuthentificationGuard } from 'src/app/authentification.guard';

@NgModule({
    imports: [RouterModule.forChild([

        { path: 'crud' ,canActivate: [AuthentificationGuard], loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty',canActivate: [AuthentificationGuard], loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline',canActivate: [AuthentificationGuard], loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: 'demande-credit',canActivate: [AuthentificationGuard], loadChildren: () => import('./demande-credit/demande-credit.module').then(m => m.DemandeCreditModule) },
        { path: 'credit',canActivate: [AuthentificationGuard], loadChildren: () => import('./credit/credit.module').then(m => m.CreditModule) },

        { path: 'garantie',canActivate: [AuthentificationGuard], loadChildren: () => import('./garantie/garantie.module').then(m => m.GarantieModule) },

        { path: 'info-client',canActivate: [AuthentificationGuard], loadChildren: () => import('./info-client/info-client.module').then(m => m.InfoClientModule) },

        { path: 'observation',canActivate: [AuthentificationGuard], loadChildren: () => import('./observation/observation.module').then(m => m.ObservationModule) },

        { path: 'pieces-jointes',canActivate: [AuthentificationGuard], loadChildren: () => import('./pieces-jointes/pieces-jointes.module').then(m => m.PiecesJointesModule) },

        { path: 'suivi',canActivate: [AuthentificationGuard], loadChildren: () => import('./suivi/suivi.module').then(m => m.SuiviModule) },


        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
