import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {IOrder} from './order';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class OrderService{

        private _orderUrl = 'api/orders/orders.json';

        constructor(private _http:Http){

        }

    getOrders():Observable<IOrder[]>{
        return this._http.get(this._orderUrl)
        .map((response:Response)=> <IOrder[]>response.json())
        .catch(this.handleError)

}

    private handleError(error:Response){
    return Observable.throw(error.json().error)
    }
}