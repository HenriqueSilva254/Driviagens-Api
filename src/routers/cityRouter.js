import { Router } from "express"
import { cityController } from "../controllers/cityControllers.js"
import { validateSchema } from "../middlewares/validateSchemas.js"
import { citySchema } from "../schemas/cityScemas.js"

const CityRouter = Router()

CityRouter.post('/cities', validateSchema(citySchema), cityController.createCity)

export default CityRouter 