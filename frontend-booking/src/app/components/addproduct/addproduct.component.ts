import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  productType: string[] = ['Luxurious Room', 'Family Room', 'Couple Room', 'Single Room'];

  productForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  previewLoaded: boolean = false;

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.ps.addProduct(this.productForm.value).subscribe(
      (data) => {
        alert('Product added successfully');
        this.productForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        this.productForm.reset();
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          this.productForm.patchValue({
            img: reader.result as string,
          });
        };
      }
    }
  }

  resetForm() {
    this.productForm.reset();
    this.previewLoaded = false;
  }
}
