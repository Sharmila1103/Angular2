"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var order_list_component_1 = require("./order-list.component");
var order_filter_pipe_1 = require("./order-filter.pipe");
var order_detail_component_1 = require("./order-detail.component");
var order_service_1 = require("./order.service");
var shared_mdoule_1 = require("../shared/shared.mdoule");
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            declarations: [
                order_list_component_1.OrderListComponent,
                order_filter_pipe_1.OrderFilter,
                order_detail_component_1.OrderDetail
            ],
            imports: [
                shared_mdoule_1.SharedModule,
                router_1.RouterModule.forChild([
                    { path: 'orders', component: order_list_component_1.OrderListComponent },
                    { path: 'order/:id', component: order_detail_component_1.OrderDetail }
                ])
            ],
            providers: [order_service_1.OrderService]
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map