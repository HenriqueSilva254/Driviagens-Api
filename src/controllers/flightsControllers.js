import FlightService from "../services/flightServices"

async function create(req, res){
    const {origin, destination, date} = req.body
    try {
        const promisse = await FlightService(origin, destination, date)
    } catch (err) {
        res.send(err.message).status(500)
    }
}