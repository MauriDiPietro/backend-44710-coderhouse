import { describe, test } from 'node:test';
import assert from 'node:assert';
import { fakerES as faker } from '@faker-js/faker';

const doc = {
    title: faker.person.jobTitle(),
    body: faker.hacker.phrase(),
    author: faker.person.fullName(),
    image: faker.image.url()
};

const apiURL = 'http://localhost:8080/news';

describe('Tests API News', ()=>{
    test('[GET] /news', async()=>{
        await fetch(apiURL, { method: 'DELETE' });
        const response = await fetch(apiURL);
        const responseGet = await response.json();
        // console.log(responseGet)
        assert.strictEqual(Array.isArray(responseGet), true);
        assert.equal(responseGet.length === 0, true);

        const response2 = await fetch(apiURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(doc)
        });
        const responsePost = await response2.json();
        assert.ok(responsePost, '_id');
        const statusCode = response2.status;
        assert.equal(statusCode, 200);

        const response3 = await fetch(apiURL);
        const responseGet2 = await response3.json();
        assert.equal(responseGet2.length, 1);
    })

    test('[POST] /news', async()=>{
        await fetch(apiURL, { method: 'DELETE' });
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(doc)
        });
        const responsePost = await response.json();
        assert.ok(responsePost, '_id');
        const statusCode = response.status;
        assert.equal(statusCode, 200);
        const id = responsePost._id;
        assert.equal(typeof id, 'string');

        
    })
    
    // await fetch(`${apiURL}/${id}`, {method: 'DELETE'});
    
})