import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { productsModel } from '../products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any;

  constructor(private http: HttpClient) { }

  addProduct(product:any){
    return this.http.post<any>('http://localhost:3000/products/add', product)
      .pipe(map(data => {
        return data;
      }))
  }

  getProducts(){
    return this.http.get<any>('http://localhost:3000/products/get')
      .pipe(map(data =>{
        if (data) {
          this.products = data;
          console.log(this.products);
        }
        return this.products;
      }))
  }

  updateQuantity(key: number) {
    this.products[key].quantity = this.products[key].quantity - 1;
  }

}