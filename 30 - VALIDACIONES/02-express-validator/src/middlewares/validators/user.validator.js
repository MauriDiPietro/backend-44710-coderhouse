import { check, validationResult } from 'express-validator';

export const validateRegister = [
    check('first_name', 'Debe contener un valor')
        .exists()
        .not()
        .isEmpty(),
    check('last_name', 'Debe contener un valor')
        .exists()
        .not()
        .isEmpty(),
    check('email', 'Debe seer un email válido')
        .exists()
        .isEmail(),
    check('password', 'Contraseña demasiado corta')
        .exists()
        .not()
        .isEmpty()
        // .custom((value)=>{
        //     if(value.length <= 8) throw new Error('password demasiado corta')
        // })
        .isLength({min: 8}),
    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (error) {
            res.status(400).send(error)
        }
    }
]