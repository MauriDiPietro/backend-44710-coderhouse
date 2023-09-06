import { transporter, mailOptions3 } from "../services/email.service.js";

export const sendMailEthereal = async(req, res)=> {
    try {
        const response = await transporter.sendMail(mailOptions3);
        console.log('mail enviado!');
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}