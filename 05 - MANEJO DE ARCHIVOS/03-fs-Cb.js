const fs = require('fs');

const path = './fileCB.txt';

if(fs.existsSync(path)){
    fs.readFile(path, 'utf-8', (error, info) => {
        if(error){
            console.log(error);
        } else {
            console.log(info);
            fs.appendFile(path, ' segundo texto', (error) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log('info cargada con éxito!');
                    fs.readFile(path, 'utf-8', (error, info) => {
                        if(error) {
                            console.log(error);
                        }else{
                            console.log(info);
                            fs.unlink(path, (error) => {
                                if(error) {
                                    console.log(error);
                                } else {
                                    console.log('archivo eliminado!');
                                }
                            })
                        }
                    })
                }
            })
        }
    })
} else {
    fs.writeFile(path, 'primer texto', (error) => {
        if(error) {
            console.log(error);
        } else {
            console.log('archivo creado con éxito!');
        }
    })
}