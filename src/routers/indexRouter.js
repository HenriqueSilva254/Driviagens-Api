import { Router } from "express"
import CityRouter from "./cityRouter.js"
import FlightRouter from "./flightsRouter.js"

const index = Router()

index.use(CityRouter)
index.use(FlightRouter)

export default index