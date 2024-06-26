
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';
import { TokenStorageService } from 'src/app/demo/service/token-storage.service';
import { loginResponse } from './loginRespone';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {






  loginForm: FormGroup;
  auth: any = {};
  boo:boolean;
  accessToken: any = {};
  msg:string="false information";

  constructor( private authservice: AuthService, private tokenStorage:TokenStorageService,private route:Router) {}
  // passwordptn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$';

  ngOnInit(): void {

  }

  login() {

    let p:any;
    this.authservice.login(this.auth).subscribe((data : loginResponse) => {
       p=data
    
     console.log('the result after login is', data.accessToken);
  
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      
    //  this.toast.success({detail:"Identification faite avec succée",summary:"Vous étes authentifié(e)",duration:5000})
      // this.loginForm.reset();
      this.route.navigate([""]);
    },(err)=>{
   //   this.toast.error({detail:"Message d'Erreur",summary:"Identification échouée,Ressayer!",duration:5000})
   console.log(err);
       }
    )
    } 

    }
  
   
    
