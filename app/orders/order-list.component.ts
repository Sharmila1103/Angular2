import {Component, OnInit} from '@angular/core';
import {OrderService} from './order.service';
import {IOrder} from './order';

@Component({
    selector:'om-product',
    templateUrl:'app/orders/order-list.component.html',
   styleUrls:['app/orders/order-list.component.css']
})

export class OrderListComponent implements OnInit{
    pageTitle:string="Order List";
    listFilter:string;
    imageWidth:number=40;
    showImage:boolean=false;
    orders:IOrder[];
    errorMessage:string;

    constructor(private _orderService: OrderService){

    }
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    ngOnInit(): void{
        console.log("thi is on init")
        this._orderService.getOrders()
        .subscribe(orders =>this.orders= orders,
        error => this.errorMessage = <any>error)

    }
    onRatingClicked(message:string): void{
        this.pageTitle= "Order List "+ message
    }
   
}