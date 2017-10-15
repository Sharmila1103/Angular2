import {Component, OnInit} from '@angular/core';
import {IOrder} from './order';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    selector:'order-detail',
    templateUrl:'app/orders/order-detail.component.html'
})

export class OrderDetail implements OnInit{
    pageTitle:string="Order Detail::";

    constructor(private _route:ActivatedRoute,
        private _router:Router){

        
    }
    ngOnInit():void{
        let id =+this._route.snapshot.params['id'];
        this.pageTitle += `:${id}`
    }
    onBack():void{
        this._router.navigate(['/orders']);
    }
}