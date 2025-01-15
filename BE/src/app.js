import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { connectDB } from "./config/db";
import routes from "./router";

// file
const app = express();
dotenv.config();

// sử dụng form urllencoded trong postman
app.use(
  express.urlencoded({
    extended: true,
  })
);
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect db
connectDB("mongodb://localhost:27017/students_management");

// routers
routes(app)

export const viteNodeApp = app; 
