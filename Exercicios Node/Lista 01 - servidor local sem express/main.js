const http = require('http');
const porta = 3000;
const host = 'localhost';

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url === '/') {
        res.write(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Olá Pessoal!!!</h1>
                <p>Seja bem vindo ao servidor NodeJS</p>

                <a href="/formulario">aaa</a>

            </body>
        </html>
        `);
    } else if (req.url === '/formulario') {
        res.write(
        `
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
    } else if (req.url === '/sobre') {
        res.write('<h1>Sobre</h1>');
    }
    res.end();
});

servidor.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});