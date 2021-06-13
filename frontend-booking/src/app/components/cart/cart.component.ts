import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cs:CartService) { }

  ngOnInit(): void {
  }

  getCart(){
    return this.cs.getCart();
  }

  getTotal(){
    return this.cs.getTotal();
  }
}
