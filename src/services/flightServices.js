import { flightsRepository } from "../repository/flightsRepository";
import dayjs from 'dayjs'

async function FlightService(origin, destination, date){
    const day = dayjs()
    //Verificar se as cidades existem na tabela  (id)
    const checkOrigin = await flightsRepository.checkCity(origin)
    const checkDestination = await flightsRepository.checkCity(destination)
    if(!checkOrigin || !checkDestination) throw 'erro'
    
    //Origem e destino devem ser diferentes. Caso não seja, emita o erro 409 (Conflict).
    if(checkOrigin === checkDestination) throw 'erro'
    //A data do voo deve ser maior do que a data atual, caso não seja, emita o erro 422 (Unprocessable Entity)
    if(date < day) throw 'erro'
    //Fazer Post
    return await flightsRepository.postFlights(origin, destination, date)
}

export default FlightService