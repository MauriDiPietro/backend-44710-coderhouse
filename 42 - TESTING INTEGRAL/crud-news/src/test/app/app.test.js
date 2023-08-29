/* ------------------------------------ JEST/SUPERTEST ----------------------------------- */

import app from '../../server.js';
import request from 'supertest';
import mongoose from 'mongoose';
import { fakerES as faker } from '@faker-js/faker';

const doc = {
    title: faker.person.jobTitle(),
    body: faker.hacker.phrase(),
    author: faker.person.fullName(),
    image: faker.image.url()
};

describe('Tests integrales app News', ()=>{
    beforeEach(async()=>{
        await mongoose.connection.collections['news'].drop();
    })

    test('[POST] /news', async()=>{
        const response = await request(app).post('/news').send(doc);
        // console.log(response.body);
        const id = response.body._id;
        const titleResponse = response.body.title;
        const titleExpected = doc.title;
        const bodyResponse = response.body.body;
        const bodyExpected = doc.body;
        const statusCode = response.statusCode;

        expect(id).toBeDefined();
        expect(response.body).toHaveProperty('_id');
        expect(titleResponse).toBe(titleExpected);
        expect(bodyResponse).toEqual(bodyExpected);
        expect(statusCode).not.toBe(404);
        expect(statusCode).toBe(200);
    })

    test('[GET] /news', async()=>{
        const responseGet1 = await request(app).get('/news');
        expect(responseGet1.body).toHaveLength(0);

        const response = await request(app).post('/news').send(doc);
        const id = response.body._id;
        expect(id).toBeDefined();

        const responseGet2 = await request(app).get('/news');
        const statusCode = responseGet2.statusCode;
        expect(statusCode).toEqual(200);

        expect(responseGet2.body).toBeInstanceOf(Array);
        expect(responseGet2.body).toHaveLength(1);   
        
        const dateResponse = responseGet2.body[0].date;
        const dateExpected = expect.stringContaining('2023');
        expect(dateResponse).toEqual(dateExpected);
    })

    test('[GET] /news/:id', async()=>{
        const responsePost = await request(app).post('/news').send(doc);
        const id = responsePost.body._id;
        expect(id).toBeDefined();

        const responseGet = await request(app).get(`/news/${id}`);
        const statusCode = responseGet.status;
        expect(statusCode).toBe(200);

        const responseBodyGetById = responseGet.body.body;
        const responseBodyPost = responsePost.body.body;

        expect(responseBodyGetById).toEqual(responseBodyPost);
        
        const idFaker = '507f191e810c19729de860ea';
        const getByIdFail = await request(app).get(`/news/${idFaker}`);
        const statusCodeFail = getByIdFail.statusCode;
        const responseFail = getByIdFail.body.msg;
        const expectedMsgError = `No se encontró el id ${idFaker} en la base de datos.`
        expect(statusCodeFail).toEqual(404);
        expect(responseFail).toEqual(expectedMsgError);
    })
})