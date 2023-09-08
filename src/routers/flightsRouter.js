import { Router } from "express"
import { FlightController } from "../controllers/flightsControllers.js"
import { validateSchema } from "../middlewares/validateSchemas.js"
import { flightSchema } from "../schemas/flights.schema.js"

const FlightRouter = Router()

FlightRouter.post('/flights', validateSchema(flightSchema), FlightController.create)

export default FlightRouter 