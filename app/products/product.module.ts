import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';



import { ProductListComponent } from './product-list.component';
import { ProductFilter } from './product-filter.pipe';
import { ProductDetail } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.mdoule';

@NgModule({
    declarations:[
        ProductListComponent,
        ProductFilter,
        ProductDetail
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
            {path:'product/:id',component:ProductDetail}
        ])
    ],
    providers:[ProductService]
})

export class ProductModule{}