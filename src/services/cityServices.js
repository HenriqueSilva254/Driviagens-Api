import { cityRepositories } from "../repository/cityRepository";

async function Create(name){
    //chamar funcao de post 
    const checkCityExist = await cityRepositories.checkCity(name)
    if(checkCityExist) console.log('erro')

    return await cityRepositories.postCity(name)
}

export const cityServices = {Create}