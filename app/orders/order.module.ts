import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';

import {OrderListComponent} from './order-list.component';
import { OrderFilter } from './order-filter.pipe';
import { OrderDetail } from './order-detail.component';
import { OrderService } from './order.service';
import { SharedModule } from '../shared/shared.mdoule';

@NgModule({
declarations:[
    OrderListComponent,
    OrderFilter,
    OrderDetail
],
imports:[
    
    SharedModule,
    RouterModule.forChild([
        {path:'orders',component:OrderListComponent},
        {path:'order/:id',component:OrderDetail}
    ])
],
providers:[OrderService]

})

export class OrderModule{

}