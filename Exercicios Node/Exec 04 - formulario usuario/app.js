const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors()); // Configuração do CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/usuario", function (req, res) {
    res.json({ mensagem: "Bem vindo " + req.query.nmNome + " " + req.query.nmCpf });
});

app.post("/usuario", function (req, res) {
    res.json({ mensagem: "Bem vindo " + req.body.nmNome + " " + req.body.nmCpf });
});

app.listen(3000, function () {
    console.log("Server is running on port http://localhost:3000");
});
