const express = require("express");
const router = express.Router();

const {
  getAllDataMovies,
  uploadPhoto,
} = require("../controllers/movies.controller");
const multer = require("../middlewares/multer");

router.get("/", getAllDataMovies);
router.patch("/upload/:id", multer(), uploadPhoto);

module.exports = router;
