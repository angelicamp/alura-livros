import express from "express"
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro ao conectar com o banco de dados'))
db.once("open", () => {
    console.log('Conectado ao banco de dados com sucesso')
})

const app = express();
app.use(express.json());
routes(app);

//Importante: é necessario exportar para que o server consiga utilizar esses objetos
export default app