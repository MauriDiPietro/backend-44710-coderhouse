import sgMail from "../services/email.service.js";
import 'dotenv/config';

export const sendGmail = async (req,res)=> {
    try {
        const { dest, name } = req.body;
        const gmailOptions = {
            to: dest,
            from: process.env.EMAIL,
            subject: 'BIenvenido',
            html: `<h1>Hola ${name}, te damos la bienvenida a Coderhouse!</h1>`,
            /* ------------------------------------ - ----------------------------------- */
            mail_settings: {
                sandbox_mode: {
                    enable: true
                }
            }    
            /* ------------------------------------ - ----------------------------------- */
        };
        const response = await sgMail.send(gmailOptions);
        console.log('email enviado');
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}
