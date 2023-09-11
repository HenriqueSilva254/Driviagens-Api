import { conflict } from "../errors/conflict.js";
import { invalid } from "../errors/invalid.js";
import { notFound } from "../errors/notFound.js";
import { flightsRepository } from "../repository/flightsRepository.js";
import dayjs from "dayjs";

async function FlightPost(req) {
  const { origin, destination, date } = req;

  const day = dayjs().format("DD-MM-YYYY");

  // Verificar se as cidades existem na tabela (id)
  const checkOrigin = await flightsRepository.checkCity(origin);
  const checkDestination = await flightsRepository.checkCity(destination);

  if (!checkOrigin) throw notFound("Cidade");
  if (!checkDestination) throw notFound("Cidade");

  // Verificar se a data do voo é maior do que a data atual
  const flightDate = dayjs(date, { format: "dd-mm-yyyy" });

  if (flightDate.isBefore(day)) {
    throw invalid("A data do voo deve ser maior do que a data atual.");
  }

  // Verificar se a origem e o destino são diferentes
  if (origin === destination)
    throw conflict("Cidade de origem e destino não podem ser iguais.");

  // Fazer o post
  return await flightsRepository.postFlights(origin, destination, date);
}

async function flightsGet(req) {
  const {
    origin,
    destination,
    "smaller-date": smallDate,
    "bigger-date": biggerDate,
  } = req;

  const small = smallDate?.split("-").reverse().join("-");
  const bigger = biggerDate?.split("-").reverse().join("-");

  if (small && !bigger) throw notFound("DataRetorno nao encontrada");
  if (!small && bigger) throw notFound("DataPartida nao encontrada");

  const flightsByQuery = await flightsRepository.getFlightsByQuery(
    origin,
    destination,
    small,
    bigger
  );
  if (!flightsByQuery) throw notFound("Voo");
  return flightsByQuery;

}

export const FlightService = { FlightPost, flightsGet };
