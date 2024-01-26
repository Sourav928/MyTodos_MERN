import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();

//Handling CORS-Cross Origin Resources Sharing
app.use(cors());

//Handling JSON Data
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//Route api
app.use("/", Routes);

const PORT = process.env.PORT || 8000;

Connection(); // DB connection

app.listen(PORT, () => console.log(`Server is up on PORT ${PORT}`)); // SEVER STATUS
