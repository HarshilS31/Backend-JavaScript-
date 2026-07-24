import express from "express";
import cors from "cors";
import progressRoutes from "./routes/progressRoutes.js";
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
// Register Routes
app.use(progressRoutes);
export default app;