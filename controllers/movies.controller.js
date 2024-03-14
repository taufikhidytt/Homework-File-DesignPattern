const { getAllData, upload } = require("../models/movies.model");

async function getAllDataMovies(req, res) {
  try {
    const movies = await getAllData();
    res.json({
      status: 200,
      message: "success get data movies",
      data: movies.rows,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error.message,
    });
  }
}

async function uploadPhoto(req, res) {
  const file = req.file;
  const { id } = req.params;

  if (!file) {
    return res.json({
      status: 400,
      message: "wrong file",
    });
  }

  try {
    const image = await upload(id, file.filename);
    res.json({
      status: 201,
      message: "success upload photo",
      data: image.rows,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error.message,
    });
  }
}

module.exports = { getAllDataMovies, uploadPhoto };
