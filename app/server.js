const http = require("http")
const port = 8080;

const rotas = {
    '/': 'Bem-vindo ao Alura livros',
    '/livros': 'Bem-vindo a seleção de livros',
    '/autores': 'Bem-vindo a seleção de autores'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'test/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log('Servidor escutando em http://localhost:'+ port)
})