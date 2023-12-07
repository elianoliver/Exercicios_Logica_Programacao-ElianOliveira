const express = require('express');

const port = 3000;
const app = express(); // instancia o servidor Express

// Define uma rota para a raiz ('/')
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Olá Pessoal!!!</h1>
                <p>Seja bem-vindo ao servidor NodeJS</p>
                <a href="/formulario">aaa</a>
            </body>
        </html>
    `);
});

// Define uma rota para '/formulario'
app.get('/formulario', (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <form action="">
                    <h1> Formulário </h1>
                    <!-- NOME -->
                    <div>
                        <label for="idNome">Seu Nome:</label>
                        <input type="text" name="nmNome" id="idNome" autofocus />
                    </div>
                    <!-- IDADE -->
                    <div>
                        <label for="idIdade">Sua Idade:</label>
                        <input type="number" name="nmIdade" id="idIdade" min="0"/>
                    </div>
                    <!-- BOTÃO ENVIAR -->
                    <div>
                        <input type="button" value="Enviar" onclick="enviar()"/>
                    </div>
                    <!-- RESULTADO -->
                    <output></output>
                </form>
            </body>
        </html>
    `);
});

// Define uma rota para '/sobre'
app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre</h1>');
});


// Inicia o servidor e escuta na porta especificada
app.listen(port, () => {
    console.log(`Servidor Express está ouvindo na porta http://localhost:${port}`);
});
