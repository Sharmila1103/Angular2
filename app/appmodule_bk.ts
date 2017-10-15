import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {BookComponent} from './book.component';
import {SampleComponent} from './sample.component';
import { ProductListComponent } from './products/product-list.component';
import {OrderListComponent} from './orders/order-list.component';
import { ProductFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { OrderFilter } from './orders/order-filter.pipe';
import { ProductDetail } from './products/product-detail.component';
import { OrderDetail } from './orders/order-detail.component';
import { WelcomeComponent } from './home/welcome.component';





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'product/:id',component:ProductDetail},
      {path:'orders',component:OrderListComponent},
      {path:'order/:id',component:OrderDetail},
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'},
    ])
  ],
  declarations: [
    AppComponent,
    BookComponent,
    SampleComponent,
    ProductListComponent,
    OrderListComponent,
    ProductFilter,
    ProductDetail,
    StarComponent,
    OrderFilter,
    OrderDetail,
    WelcomeComponent
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
function newFunction() {
    
}

