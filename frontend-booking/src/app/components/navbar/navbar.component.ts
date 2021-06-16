import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LocalStorageService } from 'angular-web-storage'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public local: LocalStorageService,private CartService: CartService) { }

  ngOnInit(): void {
  }

  getRole() {
    if (this.local.get('user') === null) {
      return "notLogin"
    }
    return this.local.get('user').result.role
    
  }
  getUser() {
    return this.local.get('user').result.name
  }
  logout() {
    this.local.clear()
  }
}
