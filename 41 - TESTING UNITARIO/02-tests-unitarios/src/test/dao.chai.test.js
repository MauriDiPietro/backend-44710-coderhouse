import DaoMongo from '../persistence/DAOS/mongo/news.mongo.dao.js';
import { expect } from 'chai';
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

    it('Debería retornar todas las noticias', async()=>{
        const collection = await newsDao.getAllNews();
        expect(Array.isArray(collection)).to.be.equal(true);
        expect(collection.length === 0).to.be.equal(true);
        expect(collection).to.have.length(0);
    })

    it('Debería agregar una noticia a la coleccion news', async() =>{
        const doc = {
            title: 'llueve en Ccórdoba',
            body: '.......',
            author: 'Juan Perez',
            image: '.....'
        };
        const response = await newsDao.createNew(doc);
        const collection = await newsDao.getAllNews();
        expect(response).to.have.property('_id');
        expect(response.title).to.be.equal(doc.title);
        expect(typeof doc.body === 'string').to.be.equal(true);
        expect(doc.body).to.be.a('string');
        expect(collection).to.have.length(1);
    });

    it('Debería encontrar un documento en una búsqueda por id', async()=>{
        const doc = {
            title: 'llueve en Ccórdoba',
            body: '.......',
            author: 'Juan Perez',
            image: '.....'
        };
        const response = await newsDao.createNew(doc);
        const docNew = await newsDao.getNew(response._id);
        const idString = response._id.toString();
        expect(docNew._id.toString()).to.equal(idString);
    });

    it('Actualizar doc', async()=>{
        const doc = {
            title: 'llueve en Ccórdoba',
            body: '.......',
            author: 'Juan Perez',
            image: '.....'
        };
        const doc2 = {
            title: 'MODIFICADO',
            body: '.......',
            author: 'Juan Perez',
            image: '.....'
        };
        const response = await newsDao.createNew(doc);
        const docNew = await newsDao.getNew(response._id);
        const docUpd = await newsDao.updateNew(docNew, doc2);
        expect(docUpd.title).to.be.equal(doc2.title);
    });

    it('Eliminar doc', async()=>{
        const doc = {
            title: 'doc a eliminar',
            body: '.......',
            author: 'Juan Perez',
            image: '.....'
        };
        const response = await newsDao.createNew(doc);
        const docDel = await newsDao.deleteNew(response._id);
        expect(docDel._id.toString()).to.equal(response._id.toString());
        expect(docDel.title).to.be.equal(doc.title);
    })
})