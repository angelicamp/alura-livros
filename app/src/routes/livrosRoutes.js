import express from "express";
import LivroController from "../controllers/livroscontroller.js";

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/:id', LivroController.listarLivrosPorId)
    .post('/livros', LivroController.cadastrarLivros)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.excluirLivro)

export default router;