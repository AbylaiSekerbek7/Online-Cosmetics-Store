class Product {
    constructor(image, name, description, category, price, rating, ingredients, benefits) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.rating = rating;
        this.ingredients = ingredients;
        this.benefits = benefits;
    }

    static getAllProducts(category) {
        const products = this.getProductsByCategories(category);
        return products;
    }

    static getProductsByRating(category) {
        const products = this.getProductsByCategories(category);
        return products.sort((a, b) => b.rating - a.rating);
    }

    static getProductsCheap(category) {
        const products = this.getProductsByCategories(category);
        return products.sort((a, b) => a.price - b.price);
    }

    static getProductsExpensive(category) {
        const products = this.getProductsByCategories(category);
        return products.sort((a, b) => b.price - a.price);
    }

    static getProductsByCategories(category) {
        if (category == "all") {
            const products = productsList;
            return products;
        }
        else {
            const products = productsList;
            return products.filter(product => product.category === category);
        }
    }
}