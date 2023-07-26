import {twilioClient} from '../services/ws.service.js';
import 'dotenv/config';

export const sendWS = async (req, res) => {
    try {
        const message = {
            body: req.body.message,
            from: process.env.CEL,
            to: req.body.dest,
            // mediaUrl: ['https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png']
        };
        const response = await twilioClient.messages.create(message);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}