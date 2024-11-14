//Numbers......................

const title = "jagirul@gmail.com";

let results = title.slice(4,10);   
let results2 = title.substring(4,10); 
let results3 = title.indexOf('u');
let results4 = title.replace("g","h")

// console.log(results);
// console.log(results2);
// console.log(results3);
// console.log(results4);

let pi = 3.14;
radious = 10;

var results5 = pi*radious**2 
// console.log(results5);


// console.log(title);
//............................................

//tamplate string..............................
const title1 = 'Best reads of 2019';
const author = 'Mario';
const like = 30;


//concatinations
let results22 = "The book called" + title1 + 'by' + author + 'has' + like + "likes";
// console.log(results22);

//template string 

let results33 = `The book called ${title1} by ${author} has ${like} Likes`;
// console.log(results33);

//Html template 

let html =`
    <h1>${title}</h1>
    <p>${author}</p>
    <span>${like}</span>  
`
// console.log(html);


//Array method
let arr = ['sad', 'ds', 'er']
// console.log(arr);

let resultsw = arr.join(',');
let resultsw1 = arr.indexOf("ds");
// console.log(resultsw);
// console.log(resultsw1);

let resultsww = arr.concat('e')
// console.log(resultsww);

let resultswww = arr.push('eweerrewrewr');

// console.log(arr);
// console.log(resultswww);

let results12 = arr.pop()
// console.log(results12);
// console.log(arr);

//boolean and compariosn
let email3 ='jitu@gmail.com'
let results223 = email3.includes('@');
let results12233 = email3.includes('!')
// console.log(results223);
// console.log(results12233);



let wo = null;
 
console.log(wo+4);

let arr1 = ["Lingi", "Tata", "Real"];
results221 = arr1.includes("Tata");

console.log(results221);
