/* -------------------------------- promesas -------------------------------- */

const divisionPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject('No se puede dividir un nro por 0')
      } else {
        resolve(a/b)
      }
    })
  }

  function sumaPromesa(a, b) {
    return new Promise((resolve, reject) => {
      if (a === 0 || b === 0) {
        reject('Suma: Operación innecesaria')
      } else {
        resolve(a+b)
      }
    })
  }

  function restaPromesa(a, b) {
    return new Promise((resolve, reject) => {
      if (a === 0 || b === 0) {
        reject('Resta: Operación invalida')
      } else if (a-b<0) {
        reject('Resta: La calculadora solo devuelve valores positivos')
      } else {
        resolve(a-b)
      }
    })
  }

  function multiplicacionPromesa(a, b) {
    return new Promise((resolve, reject) => {
      if (a < 0 || b < 0) {
        reject('Multiplicacion: La calculadora solo devuelve valores positivos')
      } else {
        resolve(a*b)
      }
    })
  }

  /* ------------------------------------ - ----------------------------------- */

const divisionAsync = async(a, b) => {
    try {
        const response = await divisionPromesa(a, b);
        return response;
    } catch (error) {
        console.log(error);
    }
};

const sumaAsync = async(a, b) => {
    try {
        const response = await sumaPromesa(a, b);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const restaAsync = async(a, b) => {
    try {
        const response = await restaPromesa(a, b);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const multiplicacionAsync = async(a, b) => {
    try {
        const response = await multiplicacionPromesa(a, b);
        return response;
    } catch (error) {
        console.log(error);
        // throw new Error('Error personalizado', error.stack)
    }
}

const test = async () => {
    console.log('division 10/2: ', await divisionAsync(10, 2));
    // console.log(await divisionAsync(10, 0));
    console.log('multiplicacion 10*2: ', await multiplicacionAsync(10, 2));
    console.log('resta 10-2: ', await restaAsync(10, 2));
    console.log('suma 10+2: ', await sumaAsync(10, 2));
};

test();