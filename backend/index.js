import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoutes from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOptions));

// api's
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoute);
// Start server only after DB connection
const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`listening port ${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
};

startServer();