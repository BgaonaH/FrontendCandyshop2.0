export class OrderProduct {
    constructor(
        public id:number |null,
        public productID:number,
        public quantity:number,
        public price:number
    ){}
}
