import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./demo/service/auth.service";
 // Assurez-vous de fournir le chemin correct vers votre service d'authentification

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) { 
      return true;      
    } else {
      this.router.navigate(['/auth/login']); 
      return false;
    }
  }
}
