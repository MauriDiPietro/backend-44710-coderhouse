import fs from 'fs';

const path = './src/daos/filesystem/db.json';

export const save = async (obj) => {
    try {
        const objs = await getAll();
        objs.push(obj)
        await fs.promises.writeFile(path, JSON.stringify(objs));
        return obj;
    } catch (error) {
        console.log(error);
    }
}

export const getAll = async () => {
    try {
        if(fs.existsSync(path)){
            const objs = await fs.promises.readFile(path, 'utf-8');
            return JSON.parse(objs)
        } else {
            return []
        }
    } catch (error) {
        console.log(error);
    }
}