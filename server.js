import express from "express";
import * as dotenv from "dotenv";
import ticketRoutes from "./routes/ticket.route.js";
import morgan from "morgan";
import { connectToDB } from "./helpers/connectDb.js";
dotenv.config();

export const app = express();

const versioning = "/api/v1";

app.use(morgan("dev"));
app.use(express.json());

app.use(versioning + "/tickets", ticketRoutes);

connectToDB();
