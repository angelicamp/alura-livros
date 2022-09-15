import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, require: true},
        autor: {type: String, require: true},
        editora: {type: String, require: true},
        numeroPaginas: {type: Number}
    }
);

// esse 'livros' dentro de model é o nome da minha collection, caso ela nao exista no db sera criada automaticamente
const livros = mongoose.model('livros', livroSchema);

export default livros;