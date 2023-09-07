import { Router } from "express"
import { cityController } from "../controllers/cityControllers"

const CityRouter = Router()

CityRouter.post('/cities', cityController.createCity)

export default CityRouter 