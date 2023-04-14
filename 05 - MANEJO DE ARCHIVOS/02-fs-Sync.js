const fs = require('fs');

const path = './file1.txt';

if(fs.existsSync(path)) {
    const info = fs.readFileSync(path, 'utf8');
    console.log(info);
    fs.appendFileSync(path, 'el archivo existe, se agrega este texto');
    const infoUpdated = fs.readFileSync(path, 'utf8');
    console.log('-------');
    console.log(infoUpdated);
    // fs.unlinkSync(path);
} else {
    fs.writeFileSync(path, 'primer texto ingresado')
}