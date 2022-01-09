import {Request, Response, Router } from 'express'
import { Motos } from '../model/motos'
import { db } from '../database/database'

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }

    private getMotos = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Motos.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }

    misRutas(){
        this._router.get('/motos', this.getMotos)
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
