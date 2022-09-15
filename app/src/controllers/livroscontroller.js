import livros from "../models/Livro.js";

class LivroController{

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static listarLivrosPorId= (req, res) => {
        const id = req.params.id
        livros.findById(id, (err, livros) => {
            if (err) {
                res.status(400).send({message: 'Erro ao encontrar o livro ' + id + err.message})
            } else{
                res.status(200).send(livros)
            }
        })
    }
    
    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err){
                res.status(500).send({message: 'Falha ao cadastrar um novo livro.' + err.message })
            } else{
                res.status(201).send(livro.toJSON())
            }
        })
    }
    
    static atualizarLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({message: 'Erro ao atualizar o Livro com o Id = ' + id + err.message})
            } else{
                res.status(200).send({message: 'Livro com o Id = ' + id + ' atualizado com sucesso'})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (err) => {
            if (err){
                res.status(500).send({message: 'Erro ao remover o Livro ' + id + err.message})
            }else{
                res.status(200).send({message: 'Livro removido com sucesso'})
            }
        })
    }
}

export default LivroController