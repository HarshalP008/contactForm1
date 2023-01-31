import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  public myForm : FormGroup | any;
  constructor() { }
}
