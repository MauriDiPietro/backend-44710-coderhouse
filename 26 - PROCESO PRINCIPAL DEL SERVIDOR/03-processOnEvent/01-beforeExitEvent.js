
process.on('beforeExit', (code) => {
    console.log(`el proceso terminó con código ${code}`);
})

console.log('ejecutando proceso....');

// process.exit(0);