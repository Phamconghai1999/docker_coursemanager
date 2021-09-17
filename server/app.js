const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRouter = require("./routes/auth");
const courseRouter = require("./routes/course");
const publicApiRouter = require("./routes/publicapi");

const db = require("./config/db");
db.connect();

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/course", courseRouter);
app.use("/api/public", publicApiRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Example app listening on port ${process.env.PORT || 5000}!`)
);
