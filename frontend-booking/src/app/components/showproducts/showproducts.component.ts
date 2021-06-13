import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  products: any

  constructor(private ps: ProductsService, private cs: CartService) {
    this.onLoading();
  }

  ngOnInit(): void {
  }

  onLoading(){
    try {
      this.ps.getProducts().subscribe(
        data => {
          this.products = data;
        },
        err => {
          console.log(err)
        });
    }catch (error){
      console.log(error)
    }
  }

  getAllProduct() {
    return this.ps.getProducts();
  }

  addToCart(product: any, key: number) {
    this.cs.addToCart(product, key);
  }

  reduceToCart(product: any, key: number) {
    this.cs.reduceToCart(product, key);
  }
}
