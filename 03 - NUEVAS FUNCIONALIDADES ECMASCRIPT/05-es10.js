/* -------------------------------------------------------------------------- */
/*                                 ES10                                       */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- trim ---------------------------------- */

const name1 = '   Pablo      ';
console.log(name1.trim());

/* ---------------------------------- flat ---------------------------------- */
const array = [1, 2, [1, 3, 5, [1, 4]]];
console.log(array.flat(2));