import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config();


const app = express();
let port =  process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use (express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOptions));
app.listen(port, () => { 
    connectDB();
    console.log(`listening port ${port}`);
});


