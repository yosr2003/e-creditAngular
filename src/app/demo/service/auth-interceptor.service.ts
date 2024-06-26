import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService  implements HttpInterceptor  {
  TOKEN_HEADER_KEY = "Authorization";
  constructor(private tokenService:TokenStorageService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ){
    let authReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set(this.TOKEN_HEADER_KEY, "Bearer " + token),
      });
    }
    return next.handle(authReq);
  }
}
