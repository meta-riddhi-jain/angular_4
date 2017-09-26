import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  form;
  constructor() { }

  ngOnInit (){
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: new FormControl(""),
      languages: new FormControl("")
    });
  };

  // textValidator(control){
  //   if(control.value.length < 3){
  //     return {'lastname': true};
  //   }
  // }
  arr = [7,8,2,6,4,9]
  onSubmit = function(user){
    console.log(user);
  }
}
