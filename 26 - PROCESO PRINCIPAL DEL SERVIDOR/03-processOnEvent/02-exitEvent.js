process.on('exit', (code) => {
    console.log(`el proceso terminó con código ${code}`);
})

console.log('ejecutando proceso....');

// process.exit(1)
// throw new Error('error de escritura de archivo')