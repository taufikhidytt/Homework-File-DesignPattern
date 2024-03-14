const express = require("express");
const app = express();
const port = 3000;

const db = require("./config/db");

const mainRoute = require("./routes/main.route");

app.use("/api", mainRoute);

db.connect((err) => {
  return err ? console.log(err) : console.log(`database connected`);
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
