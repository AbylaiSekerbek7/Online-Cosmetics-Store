class App {
    constructor() {
        this.appOrder = new Order();
    }

    // Work with Catalog

    getCatalog(category, filter) {
        let products;
        switch (filter) {
            case "all":
                products = Product.getAllProducts(category);
                this.displayProduct(products);
                break;
            case "rating":
                products = Product.getProductsByRating(category);
                this.displayProduct(products);
                break;
            case "cheapFirst":
                products = Product.getProductsCheap(category);
                this.displayProduct(products);
                break;
            case "expensiveFirst":
                products = Product.getProductsExpensive(category);
                this.displayProduct(products);
                break;
        }
    }

    displayProduct(products) {
        document.querySelector("#catalog-container").innerHTML = "";
        products.forEach(product => {
            let div = document.createElement("div");

            let prodName = document.createElement("h2");
            prodName.textContent = product.name;

            let prodImg = document.createElement("img");
            prodImg.src = product.image;
            prodImg.classList.add("product-image");

            let prodDesc = document.createElement("p");
            prodDesc.textContent = product.description;

            let prodPrice = document.createElement("p");
            prodPrice.textContent = product.price + " ₸ ";

            let prodRating = document.createElement("p");
            prodRating.textContent = "Rating " + product.rating;
            if (product.rating >= 0 && product.rating < 4) {
                prodRating.textContent += "  ⭐";
            }
            else if (product.rating >= 4 && product.rating < 8) {
                prodRating.textContent += "  ⭐ ⭐";
            }
            else if (product.rating >= 8 && product.rating <= 10) {
                prodRating.textContent += "  ⭐ ⭐ ⭐";
            }

            let buyProductBtn = document.createElement("button");
            buyProductBtn.classList.add("buy-button");
            buyProductBtn.textContent = "Add to Order";
            buyProductBtn.onclick = () => {
                Order.addToOrder(product);

                buyProductBtn.classList.remove("buy-button");
                buyProductBtn.classList.add("bought-button");
                buyProductBtn.textContent = "product Added to Order";
                document.querySelector("#orderButton").classList.remove("empty-order");
            }

            div.append(prodName, prodImg, prodDesc, prodPrice, prodRating, buyProductBtn);
            div.style.border = "2px solid gray";
            document.querySelector("#catalog-container").append(div);
        });
    }

    // Work with Order


    displayOrders() {
        document.querySelector("#orders").innerHTML = "";
        const orders = Order.getOrders();
        orders.forEach(order => {
            let div = document.createElement("div");

            let prodName = document.createElement("h2");
            prodName.textContent = order.name;

            let prodImg = document.createElement("img");
            prodImg.src = order.image;
            prodImg.classList.add("product-image");

            let prodDesc = document.createElement("p");
            prodDesc.textContent = order.description;

            let prodPrice = document.createElement("p");
            prodPrice.textContent = order.price + " ₸ ";

            let cnt = 1;
            let count = document.createElement("p");
            count.textContent = this.appOrder.getQuantity(order);
            count.textContent = cnt + " шт";
            count.id = "count";

            let cntAdd = document.createElement("button");
            cntAdd.classList.add("green");
            cntAdd.textContent = "+1";
            cntAdd.onclick = () => {
                cnt++;
                count.textContent = cnt + " шт";
            }

            let cntRemove = document.createElement("button");
            cntRemove.textContent = "-1";
            cntRemove.classList.add("red");
            cntRemove.onclick = () => {
                cnt--;
                if (cnt === 0) {
                    this.removeZeroQuantityOrders();
                }
                count.textContent = cnt + " шт";
            }

            div.style.border = "1px solid gray"
            div.style.padding = "5px";
            div.append(prodName, prodImg, prodDesc, prodPrice, count, cntAdd, cntRemove);
            document.querySelector("#orders").append(div);

        });
        this.appOrder.calcSumm();
        document.querySelector("#totalSumm").textContent = String(this.appOrder.getSumm()) + "₸";
    }

    removeZeroQuantityOrders() {
        const ordersContainer = document.querySelector("#orders");
        const orderElements = ordersContainer.querySelectorAll("div");
        orderElements.forEach(orderElement => {
            const countElement = orderElement.querySelector("#count");
            const count = parseInt(countElement.textContent);
            if (count === 0) {
                ordersContainer.removeChild(orderElement);
            }
        });
    }


    // Work with Login and Registration

    // Function for checking if we have the user in LocalStorage

    checkUserLogin(userLogin, userPassword) {
        let users = User.getUsers();
        let validUser = users.find(user => user.login === userLogin && user.password === userPassword);
        return validUser !== undefined;
    }

    // Function for checking if we don't have the same login 
    // And if not just adding the new user in LocalStorage Saving

    checkUserRegistration(rName, rLogin, rPasswd, rEmail, rAddress, rPhone, rSkinType) {
        let users = User.getUsers();
        let validUser = users.find(user => user.login === rLogin);
        if (validUser === undefined) {
            let user = new User(rName, rLogin, rPasswd, rEmail, rAddress, rPhone, rSkinType);
            users.push(user);
            User.saveUsers(users);
            return true;
        }
        else {
            return false;
        }
    }
}
