const { Schema, model } = require("mongoose")

const AutosSchema = new Schema({
    nombre: String,
    descripcion: {
        type: String,
        require: true,
    },
    precio: Number,
})

module.exports = model("Autos", AutosSchema)
