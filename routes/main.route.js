const express = require("express");
const router = express.Router();

const routerMovies = require("./movies.route");

router.use("/movies", routerMovies);

module.exports = router;
