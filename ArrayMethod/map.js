const prices = [20,43,34,13,43,76];

const mapPrice = prices.map((price)=>{
    return price/2;
})

console.log(prices);
console.log(mapPrice);

const products = [
    {name: 'Gold Star', priceVal:200},
    {name: 'Diamond Star', priceVal:403},
    {name: 'Ruby Star', priceVal:3220},
    {name: 'Monika Star', priceVal:534},
    {name: 'Silver Star', priceVal:34},
    {name: 'Titenium Star', priceVal:76}
]

const saleProducts = products.map((deductVal =>{
    
    if (deductVal.priceVal > 50){
        return {name:deductVal.name, priceVal:deductVal.priceVal/2}
    }
    else
    return deductVal;
}))

console.log(products);
console.log(saleProducts);
