import { execFile } from 'child_process';
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptPath = __dirname+'/commands.txt'


execFile(scriptPath, (err, stdout, stderr) => {
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