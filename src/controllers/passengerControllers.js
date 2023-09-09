import { passengerServices } from "../services/passengerService.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengerServices.Create(firstName, lastName);
  res.send(`create`).status(201);
}

export const passengersController = { create };
