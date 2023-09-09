import { travelServices } from "../services/travelService.js";

async function create(req, res) {
  const { flightId, passengerId } = req.body;

  await travelServices.Create(flightId, passengerId);
  res.send(`create`).status(201);
}

export const travelController = { create };
