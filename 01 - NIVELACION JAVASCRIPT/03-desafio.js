const usuarios = [
    {
        nombre: 'Danilo',
        edad: 25,
        series: ['Breaking Bad', 'Game of Thrones']
    },
    {
        nombre: 'Emmanuel',
        edad: 25,
        series: ['Sorjonen', 'Game of Thrones']
    }
];

// console.log(usuarios);

usuarios.forEach((usuario)=>{
    usuario.edad++, usuario.series.push('Casados con hijos');
});

console.log(usuarios);
