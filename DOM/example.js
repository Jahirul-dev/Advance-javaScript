const dats = document.querySelectorAll("p");
dats.forEach((pssa) => {
  let strr = "Success";
  let str2 = "error";
  let dat = pssa.innerHTML;
  if (dat.includes(strr) || dat.includes(str2)) {
    console.log("In there");
  }
});

