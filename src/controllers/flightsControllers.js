import { invalid } from "../errors/invalid.js";
import { notFound } from "../errors/notFound.js";
import { FlightService } from "../services/flightServices.js";


async function create(req, res) {
  

  await FlightService.FlightPost(req.body);
  res.send(`create`).status(201);
}

async function flightsList(req, res) {
  
  const result = await FlightService.flightsGet(req.query)
  res.send(result.rows).status(201);
}

export const FlightController = { create, flightsList};
