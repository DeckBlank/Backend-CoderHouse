import cors from "cors";
import express, { Application } from "express";
import morgan from "morgan";
import ConnectionToDatabase from "./Database/Connection";
import CONFIG from "./development.env";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/API/products", require("./Routes/Products"));

// Connection to Database
ConnectionToDatabase();

// Server Listening
app.listen(CONFIG.PORT, () =>
  console.log(`Server Listening on Port ${CONFIG.PORT}`)
);
