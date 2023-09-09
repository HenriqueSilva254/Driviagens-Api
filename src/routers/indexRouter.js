import { Router } from "express"
import CityRouter from "./cityRouter.js"
import FlightRouter from "./flightsRouter.js"
import passengersRouter from "./passengersRouter.js"
import travelsRouter from "./travelsRouter.js"

const index = Router()

index.use(CityRouter)
index.use(FlightRouter)
index.use(passengersRouter)
index.use(travelsRouter)

export default index