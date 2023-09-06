const divisionPromesa = (a, b) => {
    
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject('No se puede dividir por 0')
        } else {
            resolve(a / b)
        }
    })

}

// console.log(divisionPromesa(10, 2));

divisionPromesa(20, 0)
    .then((resp)=>{
        console.log(resp);
    }).catch(error => {
        console.log(error);
    });

divisionPromesa(20, 5)
    .then((resp)=>{
        console.log(resp);
    }).catch(error => {
        console.log(error);
    });