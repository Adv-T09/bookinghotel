import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { productsModel } from '../products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProduct: productsModel = [];
  total: number = 0;

  constructor(private ps: ProductsService) {}

  addToCart(product: any, key: number) {
    this.cartProduct.push(product);
    this.ps.updateQuantity(key);
    this.total = this.total + product.price;
  }

  reduceToCart(product: any, key: number) {
    this.cartProduct.reduce(product);
    this.ps.updateQuantity(key);
    this.total = this.total - product.price;
  }

  getCart() {
    return this.cartProduct;
  }

  getCounter() {
    return this.cartProduct.length;
  }

  getTotal() {
    return this.total;
  }
}
