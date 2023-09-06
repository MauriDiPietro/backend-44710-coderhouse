import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv, ['email']);
addErrors(ajv);

const registerSchema = Type.Object({
    first_name: Type.String(),
    last_name: Type.String(),
    email: Type.String({
        format: 'email',
        errorMessage: {
            type: 'Debe ser una cadena de texto',
            format: 'Debe ser un email válido'
        }
    }),
    password: Type.String()
}
// , { additionalProperties: false }
);

const validate = ajv.compile(registerSchema);

export const validateRegister = (req, res, next) => {
    const isValid = validate(req.body);
    console.log(isValid);
    if(!isValid) res.status(400).send(ajv.errorsText(validate.errors, {separator: "\n"}))
    else next();
}