import { cityServices } from "../services/cityServices.js"

async function createCity(req, res){
    //Post cidade
    const {name} = req.body
    
        await cityServices.Create(name)
        res.send("Created")
}

export const cityController = {createCity}