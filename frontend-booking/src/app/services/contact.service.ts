import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators'
import { LocalStorageService } from 'angular-web-storage'
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: any 
  constructor(private http: HttpClient,private local:LocalStorageService) { }

  addContact(contact:any) {
    return this.http.post<any>('http://localhost:3000/api/contact/add/',contact).pipe(map(data => {
      return data
    }))
  }

  
  putContact(contact:any) {
    let token = this.local.get('user').token
    console.log(contact);
    return this.http.put<any>('http://localhost:3000/api/contact/put/',contact, {
      headers: new HttpHeaders().set('Authorization', token),
    }).pipe(map(data => {
      return data
    }))
  }

  
  getContactById() {
    let token = this.local.get('user').token
    let userid = this.local.get('user').result.id
    return this.http.get<any>('http://localhost:3000/api/contact/get/'+userid, {
      headers: new HttpHeaders().set('Authorization', token),
    }).pipe(map(data => {
      return data
    }))
  }


}