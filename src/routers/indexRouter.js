import { Router } from "express"
import CityRouter from "./cityRouter"

const index = Router()

index.use(CityRouter)

export default index