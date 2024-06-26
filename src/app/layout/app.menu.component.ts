import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../demo/service/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    isAdmin: boolean = false; 

    constructor(public layoutService: LayoutService, private authService:AuthService) { }

  

    ngOnInit() {

        this.isAdmin = this.authService.isAdmin();
        this.model = [
            {
                label: 'Home' , visible: this.isAdmin,
                items: [
                    { label: 'Dashboard  ', icon: 'pi pi-fw pi-home', routerLink: ['/'] , visible: this.isAdmin }
                ]
            },
            {
                label: ' Options',
                items: [
                    { label: 'Demande Credit', icon: 'pi pi-fw pi-id-card', routerLink: ['/pages/demande-credit'] },
                    // { label: 'Dossier crdit', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    // { label: 'Garantie proposée', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    // { label: 'Suivi ', icon: 'pi pi-fw pi-eye', routerLink: ['/uikit/invalidstate'] },
                    // { label: 'Pieces jointes', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/button'] },
                    { label: 'consulter Demandes credit ', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/table'] },
                    // { label: 'Consultation credit', icon: 'pi pi-fw pi-search', routerLink: ['/uikit/list'] },
                    // { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    // { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    // { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    // { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    // { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    // { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    // { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    // { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    // { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    // { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
               
                ]
            },
            
           
           
            
           
        ];
    }
}
