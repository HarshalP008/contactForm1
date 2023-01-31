import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../shared/form-service.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  public myForm : FormGroup | any;
  constructor(private formServ: FormServiceService) { }
  ngOnInit(): void { 
    this.myForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      contactMtdDd: new FormControl('',Validators.required),
      // contactMtdRb: new FormControl('',Validators.required),
      phoneNo: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      submitBtn : new FormControl
    })
  }
  onSubmit(){
    console.log(this.myForm.value);
  }
}
