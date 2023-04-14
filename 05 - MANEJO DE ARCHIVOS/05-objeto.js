const fs = require('fs');

const path = './fileJSON.json';

const prods = [
    {
    name: 'Iphone',
    price: 50000,
    stock: 25
    },
    {
    name: 'Iphone2',
    price: 50000,
    stock: 25
    }
]

// console.log(JSON.stringify(prod1));
// {"name":"Iphone","price":50000,"stock":25}
const infoToJSON = JSON.stringify(prods)
fs.writeFileSync(path, infoToJSON);  //se guarda en formato JSON
const info = fs.readFileSync(path, 'utf-8');
const infoJS = JSON.parse(info);    
console.log(infoJS);

//stringify ---> para guardar la info ---> formato JSON """"
//parse --> para utilizar la info --> formato javascript
