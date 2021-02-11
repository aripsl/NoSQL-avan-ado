const { Schema, model} = require('mongoose');

const ComentarioSchema = new Schema({
    nome:{
        type: String,
    },
    mensagem: {
        type: String,
    },
    data: {
        type: Date,
        default: new Date(),
    },
});

const modelo = model("comentarios", ComentarioSchema)

module.exports = modelo;