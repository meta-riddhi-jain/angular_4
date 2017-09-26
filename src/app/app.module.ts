import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { CustomersComponent } from './customers/customers.component';
import { SortPipe } from './app.sort.pipe';
import { BaseConverterComponent } from './base-converter/base-converter.component';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    CustomersComponent,
    BaseConverterComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'product', 
        component: ProductComponent
      },
      {
        path: 'customer', 
        component: CustomersComponent
      },
      {
        path: 'converter', 
        component: BaseConverterComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
