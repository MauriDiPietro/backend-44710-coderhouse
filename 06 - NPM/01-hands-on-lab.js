const obj = {};

for (let i = 0; i < 10000; i++) {
    const nro = Math.floor(Math.random() * 20) + 1;     //generamos el nro aleatorio
    // console.log('numero aleatorio-->', nro);
    if(!obj[nro]){
        obj[nro] = 1;    // 1: 1
    } else {
        obj[nro]++      //1: 2
    }
}

console.log(obj);