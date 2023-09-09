import { db } from "../database/db.js";

async function checkCity(id){
    const check = await db.query(`SELECT * FROM cities WHERE id = $1`, [id])
    return check.rows[0]   
}

async function postFlights(origin, destination, date){
    return await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)`, [origin, destination, date])
}

export const flightsRepository = {checkCity, postFlights}