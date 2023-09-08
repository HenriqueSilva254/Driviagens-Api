import { db } from "../database/db.js";

async function postCity(name){
    console.log(name)
    return await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]) 
}
async function checkCity(name){
    const result = await db.query(`SELECT name FROM cities WHERE name = ($1)`, [name]) 
    return result.rows[0]
}


export const cityRepositories = {postCity, checkCity}