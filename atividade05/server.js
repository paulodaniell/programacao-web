const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const listaFeedbacks = [];

app.post('/feedbacks/enviar', (req, res) => {
    const { nome, comentario } = req.body;
    
    if (nome && comentario) {
        listaFeedbacks.push({ nome, comentario });
    }

    res.redirect('/feedbacks/lista');
});

app.get('/feedbacks/lista', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lista.html'));
});

app.get('/feedbacks/dados', (req, res) => {
    res.json(listaFeedbacks);
});

app.post('/feedbacks/remover', (req, res) => {
    const { index } = req.body;

    if (index !== undefined && index >= 0 && index < listaFeedbacks.length) {
        listaFeedbacks.splice(index, 1);
    }

    res.redirect('/feedbacks/lista');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});