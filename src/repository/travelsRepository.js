import { db } from "../database/db.js";

async function checkPasseger(passengerId){
    const check = await db.query(`SELECT * FROM passagers WHERE id = $1`, [passengerId])
    return check.rows[0]   
}
async function checkFlight(flightId){
    const check = await db.query(`SELECT * FROM flights WHERE id = $1`, [flightId])
    return check.rows[0]   
}

async function posTravels(passengerId, flightId){
    return await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)`, [passengerId, flightId])
}

export const travelsRepository = {checkPasseger, posTravels, checkFlight}