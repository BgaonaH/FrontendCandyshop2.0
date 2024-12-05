import { OrderProduct } from "./order-product";
import { OrderState } from "./order-state";

export class Order {
    constructor(
        public id:number|null,
        public dateCreated:Date,
        public orderProducts:OrderProduct [],
        public userId:number,
        public orderState:OrderState
    
    ){}

    getTotal(){
        let total = 0;
        for(let orderProducts of this.orderProducts){
            total += orderProducts.price*orderProducts.quantity;
            console.log('Total: '+total);
        }
    }
}
