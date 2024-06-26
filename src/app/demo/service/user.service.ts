import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl: string = 'http://localhost:8085/api/users';

  constructor(private httpClient: HttpClient) {}


  editUser(user: any, id: number) {
    return this.httpClient.put(this.userUrl +'/'+id ,user);
  }

  getAllUseres() {
    return this.httpClient.get(this.userUrl);
  }

  getUserById(id: any) {
    return this.httpClient.get(this.userUrl + '/'+id);
  }

  deleteUser(id: any) {
    return this.httpClient.delete(this.userUrl +'/'+ id);
  }

  editUserPortName(port:any,id: any)
 {
  return this.httpClient.put(this.userUrl+ '/portname'+'/'+id,port);
 }

 searchByMail(mail:any)
 {
  return this.httpClient.get(this.userUrl+ '/mail/'+mail);
 }
}