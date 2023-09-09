import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchemas.js"
import { travelController } from "../controllers/travelsController.js"
import { travelSchema } from "../schemas/travelSchema.js"

const travelsRouter = Router()

travelsRouter.post('/travels', validateSchema(travelSchema), travelController.create)

export default travelsRouter 