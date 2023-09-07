import { db } from "../database/db";

async function postCity(name){
    return await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]) 
}
async function checkCity(name){
    const result = await db.query(`SELECET name FROM cities WHERE name = ($1)`, [name]) 
    return result.rows[0]
}


export const cityRepositories = {postCity, checkCity}