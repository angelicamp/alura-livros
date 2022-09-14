import app from "./src/app.js";

// process.env.PORT: é a constante que vai identificar a porta que esta sendo escutada
// ou a porta 8080
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Servidor escutando em http://localhost:'+ port)
})