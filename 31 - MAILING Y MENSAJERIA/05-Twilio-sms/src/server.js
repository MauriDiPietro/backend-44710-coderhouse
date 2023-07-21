import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server ok en puerto ${PORT}`)
});