import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  prefixType: string[] = ['Mr', 'Mrs', 'Miss'];

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^0([8|9|6])([0-9]{8}$)'), Validators.minLength(1),Validators.maxLength(10)]),
    img: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
  });
  

  previewLoaded: boolean = false;

  constructor(private signup: UsersService, private router: Router) { }

  ngOnInit(): void { }

  register(){  
    //console.log(this.fromdata.password.errors?.minlength.actualLength);
    this.signup.signups(this.userForm.value).subscribe(
      data => {
        if(data.message){
          this.router.navigate(['/signin']);
        }else{
          alert('Cannot Sign up');
        }
      },
      err => {
        console.log(err);
        alert('Cannot Sign up');
      });
  }
  get fromdata(){
    return this.userForm.controls
  }

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        this.userForm.reset();
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          this.userForm.patchValue({
            img: reader.result,
          });
        };
      }
    }
  }

  resetForm() {
    this.userForm.reset();
    this.previewLoaded = false;
  }
  backForm() {
    this.router.navigate(['/home']);

  }

}
