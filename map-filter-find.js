//map
var elements = [2,3,2,1,4,5,67,6,5]

var numbers = elements.map((ele)=>{
    return ele*ele;
})
console.log(numbers);
//filter find array  
var filter = elements.filter((filters)=>{
    if (filters >=5){
        return filters
    }
});
console.log(filter);
//find array value and return just one elements
var find = elements.find((finds)=>{
    if (finds >=5){
        return finds;
    }
});
console.log(find);