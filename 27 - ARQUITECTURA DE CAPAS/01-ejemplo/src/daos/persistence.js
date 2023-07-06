import * as File from './filesystem/filesystem.js';
import * as MongoDB from './mongodb/mongodb.js';

let persistence = null;
let argv = process.argv[2];

switch (argv) {
    case 'file':
        persistence = File;
        console.log(argv);
        break;
    case 'mongo':
        MongoDB.initMongoDB();
        persistence = MongoDB;
        console.log(argv);
        break;
    default:
        persistence = File;
        break;
}

export const save = async(obj) =>{
    return await persistence.save(obj);
}

export const getAll = async() =>{
    return await persistence.getAll();
}