import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/product.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-showrooms',
  templateUrl: './showrooms.component.html',
  styleUrls: ['./showrooms.component.css']
})
export class ShowroomsComponent implements OnInit {
  number: any
  products : any
  quantity: number = 0
  constructor(private productsService:ProductsService,private modalService: NgbModal,private cart:CartService) { this.onLoading() }

  ngOnInit(): void {
  }
  onLoading(){
    try{
      this.productsService.getProducts().subscribe(
        data =>{
          console.log(data)
          this.products = data
        },
        err =>{
           console.log(err);
        }
      )
    }catch(err){
      console.log(err);
    }
  }

  openLg(content:any,number:number) {
    this.number = number
    this.modalService.open(content, { size: 'lg' });
  }
  
  addtoCart(){
    let mycart = {
       product:this.products[this.number],
       userId: ""
    }
    mycart.product.quantity = this.quantity
    if(this.quantity > 0){
    this.cart.pushCart(mycart).subscribe(
      data =>{
        console.log(data)
      },
      err =>{
        console.log(err);
      }
    )
  }
  else{
    alert("ใส่จำนวนให้ถูกต้อง")
  } 
    this.quantity = 0
    this.modalService.dismissAll();
  }
  cancle(){
    this.quantity = 0
    console.log(this.quantity);
    this.modalService.dismissAll();
  }
}
