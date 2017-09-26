import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular 4 app ';
  obj= {
    id: 1,
    name: "Rajat"
  }
  isTrue = true;
  onSubmit = function(user){
    console.log(user);
  }
}
