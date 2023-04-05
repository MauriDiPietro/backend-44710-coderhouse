const objects =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

const products = [];

let total = 0;

objects.forEach((obj) => {
    const keys = Object.keys(obj);
    // console.log(keys);
    const values = Object.values(obj);
    // console.log(values);
    keys.forEach((key) =>{
        if(!products.includes(key)){
            products.push(key);
        };
    });
    values.forEach((val) => (total += val));
});

console.log('products: ', products);
console.log('total: ', total);