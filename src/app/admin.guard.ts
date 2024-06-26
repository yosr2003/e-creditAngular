import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./demo/service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      this.router.navigate(['/uikit/table']); //ajouuuuteee
      return true;      
    } else {
      this.router.navigate(['/auth/error']); 
      return false;
    }
  }
}
