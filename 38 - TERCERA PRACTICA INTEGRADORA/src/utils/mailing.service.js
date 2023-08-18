import { createTransport } from 'nodemailer';
import config from '../config/config.js';

const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: config.EMAIL,
        pass: config.PASSWORD
    }
});

export const sendMail = async(user) => {
    try {
        const { first_name, email } = user;
        const gmailOptions = {
            from: config.EMAIL,
            to: email,
            subject: `Bienvenido/a ${first_name}!`,
            html: `<h1>Hola ${first_name}, Bienvenido a Coderhouse!</h1>`
        }
        await transporter.sendMail(gmailOptions);
        console.log('email enviado!');
    } catch (error) {
        throw new Error(error.message);
    }
};