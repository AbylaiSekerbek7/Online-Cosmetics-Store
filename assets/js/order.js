class Order {
    constructor() {
        this.products = [];
        this.quantity = new Map();
        this.date = new Date(Date.now());
        this.summ = 0;
        this.status = "";
    }

    static getOrders() {
        return localStorage.getItem('order_products') ? JSON.parse(localStorage.getItem('order_products')) : [];
    }

    getQuantity(product) {
        return this.quantity.get(product.name);
    }

    getDate() {
        return this.date;
    }

    getTime() {
        return this.time;
    }

    getSumm() {
        return this.summ;
    }

    setQuantity(product, cnt) {
        this.quantity.set(product.name, cnt);
    }

    static addToOrder(product) {
        const order = new Order();
        order.setQuantity(product, 1);
        order.calcSumm();

        const orderProducts = Order.getOrders();
        orderProducts.push(product);
        localStorage.setItem('order_products', JSON.stringify(orderProducts));
    }

    removeFromOrder(product) {
        if (this.quantity.has(product)) {
            const quantity = this.quantity.get(product);
            if (quantity === 1) {
                const productIndex = this.products.indexOf(product);
                products.splice(productIndex, 1);
                this.quantity.delete(product);
            }
            else {
                this.quantity.set(product, quantity - 1);
            }
            this.calcSumm();
        }
    }

    calcSumm() {
        this.summ = 0;
        for (const product of this.products) {
            this.summ += product.price * this.quantity.get(product.name);
        }
    }
}