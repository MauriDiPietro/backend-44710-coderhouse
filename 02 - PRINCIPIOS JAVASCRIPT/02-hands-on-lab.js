const viewList = (array) => {
    if(Array.isArray(array)){
/* --------------------------------- opcion1 -------------------------------- */
    //     if(array.length === 0) {
    //         return 'Empty list';
    //     } else {
    //         // for (const item of array) {
    //         //     console.log(item);
    //         // }
    //         return array.map((x) => (x));
    //     }
/* ------------------------------------ opcion2 ----------------------------------- */

    //      if(array.length !== 0)  {
    //          return array.map((x) => (x));
    //      } else {
    //          return 'Empty list';
    //      }
    // } else {
    //     return 'Is not array'
/* --------------------------------- opcion3 -------------------------------- */
    if(array.length === 0) 'Empty list';
    console.log(`Length of array: ${array.length}`);
    return array.map((x) => (x));
    } else {
        return 'Is not array'
    }
}


const array1 = [ 1, 2, 3, 4, 5, 6, 7 ];
const array2 = [];

console.log(viewList(array1));
console.log(viewList(array2));
console.log(viewList('hola'));