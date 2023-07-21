import { createTransport } from 'nodemailer';
import 'dotenv/config';
import {templateHtml} from './template.js';

export const transporter = createTransport({
    host: process.env.HOST,
    port: process.env.PORT_ETHEREAL,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

export const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Bienvenida',
    text: 'Bienvenido a Coderhouse!',
};

export const mailOptions2 = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Bienvenida',
    html: '<h1>Bienvenido a Coderhouse!</h1>',
};

export const mailOptions3 = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Bienvenida',
    html: templateHtml,
    attachments: [
        {
            path: process.cwd() + '/src/services/texto.txt',
            filename: 'Resumen-de-cuenta'
        }
    ]
};