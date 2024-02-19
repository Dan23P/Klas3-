console.log("CONNECTED");

let arrayOfProd = [];
function Product(name, category, hasDiscount, price) {
    this.name = name,
        this.category = category,
        this.hasDiscount = hasDiscount,
        this.price = price;
}

let product1 = new Product("Apple", "Food", false, 5);
let product2 = new Product("Banana", "Food", false, 4);
let product3 = new Product("iPhone", "Phone", false, 799);
let product4 = new Product("Wheat", "Food", true, 2);
let product5 = new Product("Samsung", "TV", true, 499);
let product6 = new Product("HP", "Laptop", true, 1200);
let product7 = new Product("Pear", "Food", false, 5);
let product8 = new Product("Orange", "Food", false, 4);
let product9 = new Product("Xiaomi", "Phone", true, 300);
let product10 = new Product("Chicken", "Food", true, 7);
let product11 = new Product("LG", "TV", false, 360);
let product12 = new Product("Samsung", "Phone", false, 400);
let product13 = new Product("MacBook", "Laptop", false, 1999);
let product14 = new Product("Beef", "Food", false, 9);
let product15 = new Product("Turkey", "Food", true, 13);


arrayOfProd = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15];

console.log(arrayOfProd)

function lowCostProd(productList) {
    console.log("Products more expensive than 20$ are")
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].price >= 20) {
            console.log(productList[i].name);
        }
    }
}

lowCostProd(arrayOfProd);


function foodDisc(productList) {
    console.log("")
    console.log("Food on discount is:")
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].category === "Food" && productList[i].hasDiscount === true) {
            console.log(productList[i].name);
        }
    }
}
foodDisc(arrayOfProd);


function discount(productList) {
    console.log("")
    console.log("Products on discount:")
    let productsDiscount = []
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].hasDiscount === true) {
            productsDiscount.push(productList[i])
            console.log(`${productList[i].name} price: ${productList[i].price}`);
        }
    }
    return productsDiscount
}

discount(arrayOfProd);

function vowelDiscount(productList) {
    console.log("");
    console.log("Product not on discount that start with vowels:")
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name[0] === "A" || productList[i].name[0] === "a"
            || productList[i].name[0] === "E" || productList[i].name[0] === "e"
            || productList[i].name[0] === "I" || productList[i].name[0] === "i"
            || productList[i].name[0] === "O" || productList[i].name[0] === "o"
            || productList[i].name[0] === "U" || productList[i].name[0] === "u") {

            if (productList[i].hasDiscount === false) {
                console.log(`${productList[i].name} price: ${productList[i].price}`);
            }
        }
    }
}
vowelDiscount(arrayOfProd);