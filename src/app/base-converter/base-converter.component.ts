import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-converter',
  templateUrl: './base-converter.component.html',
  styleUrls: ['./base-converter.component.css']
})
export class BaseConverterComponent implements OnInit {

  constructor() { }
  converterForm ;
  ngOnInit() {
    this.converterForm = new FormGroup({
      decimal: new FormControl(""),
      binary: new FormControl(""),
      octal: new FormControl(""),
      hexa: new FormControl("")
    });
  }

  decimalChanged = function(oldValue, newValue){
    console.log(oldValue, newValue);
    if(newValue !== ""){
      this.converterForm.patchValue({binary: parseInt(newValue, 10).toString(2)});
      this.converterForm.patchValue({octal: parseInt(newValue, 10).toString(8)});
      this.converterForm.patchValue({hexa: parseInt(newValue, 10).toString(16)});
    }else{
      this.converterForm.patchValue({binary: ""});
      this.converterForm.patchValue({octal: ""});
      this.converterForm.patchValue({hexa: ""});
    }
  }

  b = 0;
  o = 0;
  h = 0;

  binaryChanged = function(oldValue, newValue){
    this.b += 1;
    if(this.b == 1){
      if(newValue !== ""){
        this.converterForm.patchValue({decimal: parseInt(newValue, 2).toString(10)});
      }else{
        this.converterForm.patchValue({decimal: ""});
      }
      this.b = 0;
    }
  }

  octalChanged = function(oldValue, newValue){
    this.o += 1;
    if(this.o == 1){
      if(newValue !== ""){
        this.converterForm.patchValue({decimal: parseInt(newValue, 8).toString(10)});
      }else{
        this.converterForm.patchValue({decimal: ""});
      }
      this.o = 0;
    }
  }

  hexaChanged = function(oldValue, newValue){
    this.h += 1;
    if(this.h == 1){
      if(newValue !== ""){
        this.converterForm.patchValue({decimal: parseInt(newValue, 16).toString(10)});
      }else{
        this.converterForm.patchValue({decimal: ""});
      }
      this.h = 0;
    }
  }

}
