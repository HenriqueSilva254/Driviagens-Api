import { notFound } from "../errors/notFound.js";
import { travelsRepository } from "../repository/travelsRepository.js";


async function Create(flightId, passengerId){

    const checkFlight = await travelsRepository.checkFlight(flightId)
    const checkPasseger = await travelsRepository.checkPasseger(passengerId)

    if(!checkFlight) throw notFound('Voo não existe')
    if(!checkPasseger) throw notFound('Passageiro não existe')

    return await travelsRepository.posTravels(passengerId, flightId)
}

export const travelServices = {Create}