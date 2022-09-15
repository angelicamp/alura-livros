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
app.get('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id);
    livros[index].Titulo = req.body.Titulo;
    res.json(livros);
})

function buscarLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscarLivro(id);
    livros.splice(index, 1);
    res.send('Livro ' + id + ' removido com sucesso')
})

//Importante: é necessario exportar para que o server consiga utilizar esses objetos
export default app