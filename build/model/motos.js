"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motos = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const motosSchema = new mongoose_1.Schema({
    _tipoObjeto: {
        type: String //Valores "A, "T"...
    },
    _precio: {
        type: Number
    },
    _potencia: {
        type: Number
    },
    _traccion: {
        type: String
    },
});
// La colecciรณn de la BD (Plural siempre)
exports.Motos = (0, mongoose_1.model)('motos', motosSchema);
