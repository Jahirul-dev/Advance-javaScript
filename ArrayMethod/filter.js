var datas = [32,21,3,21,22,41,20]

const filterArray = datas.filter((data)=>{
    return data>=20
})
console.log(filterArray);

var user = [
    {name: 'Syean', premium: true},
    {name: 'Ryean', premium: false},
    {name: 'Jyean', premium: true},
    {name: 'Tyesan', premium: true},
    {name: 'Byean', premium: false}
];

let filterusers = user.filter((data1)=>{
    return data1.premium
})

console.log(filterusers);
console.log(user);
