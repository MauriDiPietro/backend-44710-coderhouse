"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatus || (HttpStatus = {}));
;
class HttpResponse {
    Ok(res, data) {
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message: 'Success',
            data: data
        });
    }
    ;
    NotFound(res, data) {
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            message: 'Not Found',
            error: data
        });
    }
    ;
    Unauthorized(res, data) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.UNAUTHORIZED,
            message: 'Unauthorized',
            error: data
        });
    }
    ;
    Forbidden(res, data) {
        return res.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.FORBIDDEN,
            message: 'Forbidden',
            error: data
        });
    }
    ;
    ServerError(res, data) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal Server Error',
            error: data
        });
    }
    ;
}
exports.HttpResponse = HttpResponse;
;
