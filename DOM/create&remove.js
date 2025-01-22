//js
// let liTag = document.querySelectorAll('li')

// // liTag.forEach(eachLi =>{
// //     eachLi.addEventListener('click', (e) =>{
// //         console.log(e.target);

// //         e.target.style.textDecoration = 'line-through'

// //     })
// // })

//remove
let liTag01 = document.querySelectorAll("li");

liTag01.forEach((eachLi01) => {
  eachLi01.addEventListener("click", () => {
    eachLi01.remove();
  });
});

//add
let getDiv = document.querySelector("div");
// let addButton = document.querySelector('button')
// addButton.addEventListener('click', (e)=>{
//     getDiv.innerHTML += '<li>Data added</li>';
//     })

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const addLi = document.createElement("li");
  addLi.textContent = "Data added dwd";
  //getDiv.append(addLi);
  getDiv.prepend(addLi);
  console.log(getDiv.textContent);
});

getDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
