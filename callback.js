    // const myfunc = (callbackfun) =>{
    //     let value = "70";
    //     callbackfun(value)
    // }
    // myfunc(function(value){
    //     console.log(value);
        
    // })


let sum;
function getData(data){
    console.log(data);
}

function datas(data2, data4){
    sum = data2 + data4;
    getData(sum)
    return sum;

}

datas(2,3)
