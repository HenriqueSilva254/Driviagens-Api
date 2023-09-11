import { db } from "../database/db.js";

async function checkCity(id) {
  const check = await db.query(`SELECT * FROM cities WHERE id = $1`, [id]);
  return check.rows[0];
}

async function postFlights(origin, destination, date) {
  return await db.query(
    `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)`,
    [origin, destination, date.split("-").reverse().join("-")]
  );
}

async function getFlightsByQuery(origin, destination, small, bigger) {
    let query = [];
  
    let SELECT = `SELECT flights.id, cities_origin.name AS origin, cities_destination.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY')
    FROM flights
    INNER JOIN cities AS cities_origin ON flights.origin = cities_origin.id
    INNER JOIN cities AS cities_destination ON flights.destination = cities_destination.id
    `; 
  
    if (origin) {
      SELECT += `WHERE cities_origin.name = '${origin}'`; 
    }
    if (destination) {
      if (origin) {
        SELECT += ' AND '; 
      }
      SELECT += `WHERE cities_destination.name = '${destination}'`; 
    }
    if (small && bigger) {
      if (origin || destination) {
        SELECT += ' AND ';
      }
      SELECT += `flights.date >= '${small}' AND flights.date <= '${bigger}'`; 
    }
  
    SELECT += ' ORDER BY flights.date ASC';
  
    const result = await db.query(SELECT);
    return result;
  }
  


export const flightsRepository = {
  checkCity,
  postFlights,
  getFlightsByQuery,
};
