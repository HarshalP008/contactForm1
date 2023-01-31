import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  public myForm : FormGroup | any;
  constructor() { }
  ngOnInit(): void { 
    this.myForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      // contactMtdDd: new FormControl('',Validators.required),
      contactMtdRb: new FormControl('',Validators.required),
      phoneNo2: new FormControl('',Validators.required),
      email2: new FormControl('',Validators.required),
      submitBtn : new FormControl
    })
  }
  onSubmit(){
      console.log(this.myForm);
    }
}
