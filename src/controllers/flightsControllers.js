import FlightService from "../services/flightServices.js";

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await FlightService(origin, destination, date);
  res.send(`create`).status(201);
}

export const FlightController = { create };
