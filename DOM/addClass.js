let article = document.querySelector("article");

console.log(article);
console.log(article.innerHTML);
console.log(article.children);
console.log(Array.from(article.children));

Array.from(article.children).forEach((childdd) => {
  console.log(childdd.innerHTML);
  childdd.classList.add("artClass");
});

let parant = document.querySelector("p");
parant.parentElement.classList.add("parant");

console.log(parant.parentElement.parentElement);
console.log(parant.nextElementSibling);
console.log(parant.previousElementSibling);
console.log(parant.nextElementSibling.parentElement.children);
