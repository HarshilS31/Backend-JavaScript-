import { createProgress,getAllProgress,deleteProgress } from "../controllers/progressControllers.js";
import { Router } from "express";
const router = Router()
router.post("/progress",createProgress)
router.get("/progress",getAllProgress)
router.delete("/progress/:id",deleteProgress)
export default router