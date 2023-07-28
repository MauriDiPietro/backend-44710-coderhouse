import express from 'express';
import { errorMiddleware } from './error.middleware.js';
import { HttpResponse } from './http.response.js';
const httpResponse = new HttpResponse();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    // const data = [];
    // const data = [{name: 'Juan', age: 45}];
    data = []
    try {
        if(data.length === 0) return httpResponse.NotFound(res, 'No data');
        return httpResponse.Ok(res, data);
    } catch (error) {
        next(error);
        // return httpResponse.ServerError(res, error)
    } 
});

app.use(errorMiddleware)

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});