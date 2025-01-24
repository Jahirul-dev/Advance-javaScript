// let para = document.querySelectorAll("p");
// let para = document.querySelectorAll("p");

// para.forEach((element) => {
//   console.log(element.innerText);
//   element.innerText += ". Data has added already!!";
// });

let Datas = document.querySelector(".content");

let dataArray = ["Mario", "Tanisha", "Emmar", "John"];
// console.log(Datas.innerText);
// // console.log(Datas.innerHTML);
// Datas.innerText = " Data updated";
// Datas.innerHTML = "<h2>Datas html has been updated</h2>;";

dataArray.forEach((person) => {
  //console.log(person);
  Datas.innerHTML += `<p>${person}</p>`;
});

let link = document.querySelector("a");
// console.log(link);
// console.log(link.getAttribute("href"));

let getattr = document.querySelector("a");
console.log(getattr.getAttribute("id"));
getattr.setAttribute("id", "success");
getattr.setAttribute("style", "color:red");

//Copy
let copy = document.querySelector(".copy");
copy.addEventListener("copy", () => {
  console.log("some one copied the text");
});

copy.addEventListener("click", () => {
  console.log("just clicked");
});
