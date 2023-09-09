import { conflict } from "../errors/conflict.js";
import { passengersRepository } from "../repository/passengersRepository.js";


async function Create(firstName, lastName){
    //chamar funcao de post 
    const checkCityExist = await passengersRepository.checkPassenger(firstName, lastName)
    
    if(checkCityExist) {
        
        throw conflict('Passageiro já existe')}

    return await passengersRepository.postPassenger(firstName, lastName)
}

export const passengerServices = {Create}