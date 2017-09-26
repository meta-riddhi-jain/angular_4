import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  day = new Date(1994, 7, 10);
  products = [
    {
      id: 1,
      name: "India"
    },
    {
      id: 2,
      name: "Africa"
    },
    {
      id: 3,
      name: "America"
    }
  ];

  newProduct = "";

  removeProduct = function(index){
    // console.log("here");
    this.products.splice(index, 1)
  }

  pushProduct = function(){
    if(this.newProduct != ""){
      this.products.push({id: this.products.length+1, name: this.newProduct});
      this.newProduct = "";
    }else{
      this.invalidValue = true;
    }
  }
}
