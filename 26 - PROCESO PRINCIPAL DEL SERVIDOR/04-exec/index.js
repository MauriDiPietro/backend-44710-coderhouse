import { exec } from 'child_process';

const command = 'ls -lh'

const command2 = 'find /'

exec(command2, (err, stdout, stderr) => {
    if(err){ //no se pudo ejecutar
        console.log('ERR');
        console.log(err.message);
        return
    }

    if(stderr){
        console.log('STDERR: ');
        console.log(stderr);
        return
    }

    console.log(stdout);
})