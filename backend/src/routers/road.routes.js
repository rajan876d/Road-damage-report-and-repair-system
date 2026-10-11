// routers/road.routes.js
import express from "express";
import roadController from "../controllers/road.controller.js";
import auth from "../middleware/auth.js";
import adminOnly from "../middleware/adminOnly.js";
import validate from "../middleware/validate.js";
import validategeo from "../validator/geo.js";

const router = express.Router();

router.get("/", roadController.getRoads);   
router.post("/", auth, adminOnly, validate(validategeo.roadSchema), roadController.createRoad);
router.put("/:id", auth, adminOnly, validate(validategeo.roadSchema.partial()), roadController.updateRoad);
router.delete("/:id", auth, adminOnly, roadController.deleteRoad);

export default router;