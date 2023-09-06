import {dirname} from 'path';
import { fileURLToPath } from 'url';
export const __dirname = dirname(fileURLToPath(import.meta.url));

/* ------------------------------------ - ----------------------------------- */

import bcrypt from 'bcrypt';

/**
 * Funcion que realiza el encriptado de contraseña a través de bcrypt con el método hashSync.
 * Recibe password sin encriptar,
 * retorna password encriptada
 * @param {*} password 
 * @returns password encriptada/hasheada
 */
export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

// console.log(createHash('1234'));

/**
 * 
 * @param {*} user 
 * @param {*} password 
 * @returns 
 */
export const isValidPassword = (password, user) => bcrypt.compareSync(password, user.password);

