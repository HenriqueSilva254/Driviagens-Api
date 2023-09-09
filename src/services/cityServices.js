import { conflict } from "../errors/conflict.js";
import { cityRepositories } from "../repository/cityRepository.js";

async function Create(name){
    //chamar funcao de post 
    const checkCityExist = await cityRepositories.checkCity(name)
    
    if(checkCityExist) {
        
        throw conflict('Cidade já existe')}

    return await cityRepositories.postCity(name)
}

export const cityServices = {Create}