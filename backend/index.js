// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoutes from "./routes/user.route.js";
// dotenv.config();


// const app = express();
// let port = process.env.PORT || 8000;
// // ...existing code...
// app.get("/", (req, res) => {
//     res.send("Server is running!");
// });
// // ...existing code...

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const corsOptions = {
//     origin: "http://localhost:5173",
//     credentials: true,
// };
// app.use(cors(corsOptions));
// port = process.env.PORT || 8000;


// // api's

// app.use("/api/v1/user", userRoutes);



// app.listen(port, () => {
//     connectDB();
//     console.log(`listening port ${port}`);
// });


import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js";
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