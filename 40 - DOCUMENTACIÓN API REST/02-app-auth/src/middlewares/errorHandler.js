import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse(); 

export const errorHandler = (error, req, res, next) => {
    // console.log('LLEGÓ AL MIDDLEWARE');
    //si quiero ver el stack del error, hago un: 
    // console.log(error) 
    return httpResponse.NotFound(res, error.message)
}