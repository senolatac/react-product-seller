export default class Purchase {
    constructor(userId, productId, price, purchaseTime, id) {
        this.userId = userId;
        this.productId = productId;
        this.price = price;
        this.purchaseTime = purchaseTime;
        this.id = id;
    }
}
