import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import PaymentService from './services/payment.service.js';
import mercadopago from 'mercadopago'

const app = express(); 

app.use(express.json());
app.use(cors({ origin: process.env.REACT_APP }));

const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
];

/* --------------------------------- stripe --------------------------------- */

app.post('/api/payments/payment-intents', async(req, res)=>{
    const productRequested = products.find(product => product.id === Number(req.query.id));
    if(!productRequested) res.status(404).json({ msg: 'Product Not Found' });
    const paymentIntentInfo = {
        amount: productRequested.price,
        currency: 'usd',
        metadata: {
            userId: 'userId_mongo',
            orderDetails: JSON.stringify({
                [productRequested.name]: 2
            })
        }
    };
    const service = new PaymentService();
    const result = await service.createPaymentIntent(paymentIntentInfo);
    res.json({
        status: 'success',
        payload: result
    })
});

/* ------------------------------ mercado pago ------------------------------ */

app.get('/create-order', async(req, res)=>{
    mercadopago.configure({
        access_token: 'TEST-2008856426629323-091419-b929f8b3a57e17193fb8cb21cf2ce461-1479458708'
    })

   const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Yerba Mate Coderhouse',
                unit_price: 2000,
                currency_id: 'ARS',
                quantity: 1,
            }
        ]
    })
    res.json(result)
})

app.listen(8080, ()=> console.log('Server ok on port 8080'))