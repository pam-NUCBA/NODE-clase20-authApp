import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";

import registerRouter from './routes/register.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
dbConnection();

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//start route:
app.get("/", (req, res) => {
  res.send("hola");
});

//endpoint routes:
app.use('/register', registerRouter)

app.listen(PORT, () =>
  console.log(`listening on http://localhost:${PORT}`)
);
