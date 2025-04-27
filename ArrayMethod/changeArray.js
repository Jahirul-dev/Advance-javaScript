let changeObj = [
    {name: 'Gold', price: 1020},
    
    {name: 'Diamond', price: 7020},
    
    {name: 'Lithium', price: 820},
    
    {name: 'Plutinium', price: 5020} ,
    
    {name: 'Ruby', price: 44320},
    
    {name: 'Silver', price: 320}
]

// let filterVal = changeObj.filter((val)=>{
  
//         // if (val.price> 1000){
//         //     return {name: val.name, price: val.price}
//         // }  
//         return val.price > 2000
// })

// let mapOnFilter = filterVal.map((mapVal)=>{
//     return `${mapVal.name} prices in ${mapVal.price/2}`
// })
// console.log(mapOnFilter);
let filterVal = changeObj
.filter((val)=> val.price > 2000)
.map((mapVal)=> `${mapVal.name} prices in ${mapVal.price/2}`)
console.log(filterVal);
