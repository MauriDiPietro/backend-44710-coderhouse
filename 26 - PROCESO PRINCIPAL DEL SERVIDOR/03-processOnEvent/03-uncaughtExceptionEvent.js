

process.on('uncaughtException', (err)=>{
    console.log(`error no atajado: ${err.message}`);
    process.exit(1);
})

const miFunc1 = () => {
    console.log('ejecutando proceso...');
    throw new Error('ERROR NO ATAJADO!!!')
}

miFunc1()