var faker = require('faker');

//write function that gives 10 products and 10 prices;

function generate(amountOfProducts){
    var i = 0;
    while(i < amountOfProducts){
        var price = faker.commerce.price();
        var name =  faker.commerce.productName();
        console.log(name + ' ' + price);
        i += 1;
    }
}
generate(10);