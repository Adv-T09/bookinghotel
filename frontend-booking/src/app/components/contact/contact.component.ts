import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LocalStorageService } from 'angular-web-storage'
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

  export class ContactComponent implements OnInit {
    contact:any = [{}]
    constructor(private ps: ContactService, private local: LocalStorageService) {this.onLoading() }
    contactForm = new FormGroup({
      userId : new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    })
  
    previewLoaded: boolean = false
    ngOnInit(): void {
    }
    get fromdata(){
      console.log(this.contactForm.controls);
      return this.contactForm.controls
    }
    
    onLoading(){
      try{
        this.ps.getContactById().subscribe(
          data =>{
            this.contact = data     
          },
          err =>{
             console.log(err);
          }
        )
      }catch(err){
        console.log(err);
      }
    }
  
  
    getUser() {
      return this.local.get('user').result.username
    }
    putData(){
      this.contactForm.value.userId = this.local.get('user').result.id
      this.ps.addContact(this.contactForm.value).subscribe(data=>{
        alert("add contact successfull !!!")
        
      },err=>{
        console.log(err);
        
      })
    }
    
  
  }