import express from "express"

const app = express();
app.use(express.json());

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

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})

//Importante: é necessario exportar para que o server consiga utilizar esses objetos
export default app