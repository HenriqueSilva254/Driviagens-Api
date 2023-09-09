import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchemas.js"
import { passengersController } from "../controllers/passengerControllers.js"
import { passengersSchema } from "../schemas/passengerSchema.js"

const passengersRouter = Router()

passengersRouter.post('/passengers', validateSchema(passengersSchema), passengersController.create)

export default passengersRouter 