import {Schema, model } from 'mongoose'
// Definimos el Schema
const motosSchema = new Schema({
    _tipoObjeto: {
        type: String  //Valores "A, "T"...
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
})

export type iAuto = {
    _tipoObjeto: string | null,
    _precio: number | null,
    _potencia: number | null,
    _traccion: string | null
  }

// La colecciรณn de la BD (Plural siempre)
export const Motos = model('motos', motosSchema)