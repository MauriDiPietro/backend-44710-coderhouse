import { test } from 'node:test';
import assert from 'node:assert';
import DaoMongo from '../persistence/DAOS/mongo/news.mongo.dao.js';
import { logger } from '../logs/news.logs.js';
import mongoose from 'mongoose';
import { fakerES as faker } from '@faker-js/faker';

const doc = {
    title: faker.person.jobTitle(),
    body: faker.hacker.phrase(),
    author: faker.person.fullName(),
    image: faker.image.url()
};

let newsDao;
// before(async()=>{
    newsDao = new DaoMongo();
    DaoMongo.init();
    await mongoose.connection.collections['news'].drop();
    logger.info('se limpió la base de datos');
// });

test('Debería retornar todas las noticias', async()=>{
    const response = await newsDao.getAllNews();
    assert.strictEqual(Array.isArray(response), true);
    assert.strictEqual(response.length === 0, true);
});

test('Debería agregar una noticia a la coleccion news', async() =>{
    const response = await newsDao.createNew(doc);
    const collection = await newsDao.getAllNews();
    assert.ok(response, '_id');
    assert.equal(response.title, doc.title);
    assert.equal(typeof doc.body, 'string');
    assert.equal(collection.length, 1);
});

test('Debería encontrar un documento en una búsqueda por id', async()=>{
    const response = await newsDao.createNew(doc);
    const idString = response._id.toString();
    const docNew = await newsDao.getNew(response._id);
    assert.equal(docNew._id.toString(), idString);
});

test('Actualizar doc', async()=>{
    const doc = {
        title: faker.person.jobTitle()+'a',
        body: faker.hacker.phrase(),
        author: faker.person.fullName(),
        image: faker.image.url()
    };
    const doc2 = {
        title: 'MODIFICADO',
        body: 'body modificado',
        author: 'Juan Perez',
        image: '.....'
    };
    const response = await newsDao.createNew(doc);
    const docNew = await newsDao.getNew(response._id);
    const docUpd = await newsDao.updateNew(docNew, doc2);
    assert.strictEqual(docUpd.title, doc2.title);
    assert.strictEqual(docUpd.body, doc2.body);
    assert.strictEqual(docUpd.author, doc2.author);
});


test('Eliminar doc', async()=>{
    const doc = {
        title: faker.person.jobTitle()+'b',
        body: faker.hacker.phrase(),
        author: faker.person.fullName(),
        image: faker.image.url()
    };
    const response = await newsDao.createNew(doc);
    const docDel = await newsDao.deleteNew(response._id);
    assert.equal(docDel._id.toString(), response._id.toString());
    assert.equal(docDel.title, doc.title);
})



