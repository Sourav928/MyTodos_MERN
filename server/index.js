import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Handling CORS-Cross Origin Resources Sharing
app.use(cors());

//Handling JSON Data
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//Route api
app.use("/", Routes);

app.use(express.static(path.resolve(__dirname, "client", "build")));
//prod
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 8000;

Connection(); // DB connection

app.listen(PORT, () => console.log(`Server is up on PORT ${PORT}`)); // SEVER STATUS
