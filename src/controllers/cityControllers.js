import { cityServices } from "../services/cityServices.js"

async function createCity(req, res){
    //Post cidade
    const {id} = req.bory
    try {
        const promise = await cityServices.Create(id)
        res.sendStatus(201)
    } catch (err) {
        res.send(err).status(500)
    }

}

async function getCities(req, res){
    //Post cidade
    const {id} = req.bory
    try {
        const promise = await cityServices.Create(id)
        res.sendStatus(201)
    } catch (err) {
        res.send(err).status(500)
    }

}

export const cityController = {createCity}