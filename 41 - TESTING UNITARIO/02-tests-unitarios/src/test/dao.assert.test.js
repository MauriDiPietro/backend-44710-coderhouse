import DaoMongo from '../persistence/DAOS/mongo/news.mongo.dao.js';
import assert from 'assert';
import mongoose from 'mongoose';
import { logger } from '../logs/news.logs.js';

describe('Tests unitarios de Dao News', () => {
    let newsDao;
    before(async()=>{
        newsDao = new DaoMongo();
        DaoMongo.init();
        await mongoose.connection.collections['news'].drop();
        logger.info('se limpió la base de datos');
    });
    after(()=>{
        logger.info('finalizaron las pruebas')
    });

    it('Debería agregar una noticia a la coleccion news', async() =>{
        const doc = {
            title: 'llueve en Ccórdoba',
            body: '.......',
            author: 'Juan Perez',
            image: '.....'
        };
        const response = await newsDao.createNew(doc);
        assert.ok(response._id);
        assert.equal(response.title, doc.title);
        assert.equal(typeof doc.body === 'string', true);
    })
})