import {Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';

import {IProduct} from './product';
@Component({
    selector:'pm-product',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle:string="Product List";
    listFilter:string;
    imageWidth:number=50;
    showImage:boolean=false;
    products:IProduct[];
    errorMessage:string;

        constructor(private _productService: ProductService){

        }

        toggleImage():void{
            this.showImage = !this.showImage;
        }

        ngOnInit(): void{
            console.log("thi is on inir")
           this._productService.getProducts()
            .subscribe(products =>this.products= products,
                error =>this.errorMessage =<any>error)
        }
        onRatingClicked(message:string): void{
            this.pageTitle= "Product List "+ message
        }
}