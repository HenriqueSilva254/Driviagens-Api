import { db } from "../database/db.js";

async function checkPassenger(firstName, lastName){
    const check = await db.query(`SELECT * FROM passagers WHERE "firstName" = $1 AND "lastName" = $2`, [firstName, lastName])
    return check.rows[0]   
}

async function postPassenger(firstName, lastName){
    return await db.query(`INSERT INTO passagers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName])
}

export const passengersRepository = {checkPassenger, postPassenger}