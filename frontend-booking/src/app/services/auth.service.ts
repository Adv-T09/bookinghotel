import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from 'angular-web-storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public local: LocalStorageService) { }

  signIn(authData: any){
    return this.http.post<any>('http://localhost:3000/login/signin', authData)
    .pipe(map(data => {
        if(data){
          this.local.set('users', data, 1, 'w');
          console.log(this.local.get('users'));
        }
        return data;
      }));
  }
  /*
  signUp(authData: any){
    return this.http.post<any>('http://localhost:3000/user/signup', authData);
  }
  */
}
