import express from "express";
import authRoutes from "./routers/auth.routes.js";
import config from "./config/config.js";
import connectDB from "./config/database.js";

connectDB();

const app = express();


app.use(express.json());


app.use("/api/auth", authRoutes);


app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});