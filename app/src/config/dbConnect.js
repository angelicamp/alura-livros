import mongoose from "mongoose"

//na pag do MongoDB>Database>seleciona o cluster>conect> connect your application
mongoose.connect("mongodb+srv://angelicamp:Aa%4015121314@cluster0.vzyrbwc.mongodb.net/");

let db = mongoose.connection;

export default db;