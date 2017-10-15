import {Pipe, PipeTransform} from '@angular/core';
import {IOrder} from './order';

@Pipe({
     name:'OrderFilter'
})

export class OrderFilter implements PipeTransform{
transform(value:IOrder[],filterBy:string):IOrder[]{
    filterBy = filterBy?filterBy.toLocaleLowerCase():null;
    return filterBy? value.filter((order:IOrder)=>
    order.orderName.toLocaleLowerCase().indexOf(filterBy)!==-1):value

}
}