import express from "express"

const app = express();
const livros = [
    {id: 1, 'Titulo': 'Clean Code'},
    {id: 2, 'Titulo': 'Arquitetura Limpa'}
]

app.get('/', (req, res) =>{
    res.status(200).send('Bem-vindo ao Alura Livros');
})

app.get('/livros', (req, res) =>{
    res.status(200).json(livros);
})

//Importante: é necessario exportar para que o server consiga utilizar esses objetos
export default app