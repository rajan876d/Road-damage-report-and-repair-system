import express from "express";
import authRoutes from "./routers/auth.routes.js";
import config from "./config/config.js";
import connectDB from "./config/database.js";
import wardRoutes from "./routers/ward.routes.js";
import roadRoutes from "./routers/road.routes.js";
import issueRoutes from "./routers/issue.routes.js";

connectDB();

const app = express();


app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/wards", wardRoutes);
app.use("/api/roads", roadRoutes);
app.use("/api/issues", issueRoutes);


app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});