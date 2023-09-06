import {twilioClient} from '../services/ws.service.js';
import 'dotenv/config';

export const sendWS = async (req, res) => {
    try {
        const message = {
            body: req.body.message,
            from: process.env.CEL,
            to: req.body.dest,
            mediaUrl: ['https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png']
        };
        const response = await twilioClient.messages.create(message);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const sendMessageToClient = async (dest, message) => {
    const msg = {
      body: message,
      from: process.env.CEL,
      to: dest,
    };
    await twilioClient.messages.create(msg);
  }

export const receiveWS = async(req, res)=> {
    console.log(req.body);
    if(req.body.Body.toUpperCase().includes('HOLA')) {
        await sendMessageToClient(req.body.From, `Hola ${req.body.ProfileName}!, ¿Cual es tu consulta?`)
    }
    if(req.body.Body.toUpperCase().includes('CHAU')) {
        await sendMessageToClient(req.body.From, `Chau ${req.body.ProfileName}!, Nos vemos!`)
    }
}