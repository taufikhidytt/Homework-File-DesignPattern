const db = require("../config/db");

async function getAllData() {
  try {
    const data = await db.query("SELECT * FROM movies");
    return data;
  } catch (error) {
    throw error;
  }
}

async function upload(id, images) {
  try {
    const query = `UPDATE movies SET images = $2 WHERE id = $1`;
    const result = await db.query(query, [id, images]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllData, upload };
