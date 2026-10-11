import express from "express";
import wardcontroller from "../controllers/ward.controller.js";
import adminOnly from "../middleware/adminOnly.js";
import protect from "../middleware/auth.js";
import auth from "../middleware/auth.js";


const router = express.Router();
router.get("/", wardcontroller.getWards);                                  // public, for dropdowns
router.post("/", protect,auth, adminOnly, wardcontroller.createWard);
router.put("/:id", protect, auth, adminOnly, wardcontroller.updateWard);
router.delete("/:id", protect, auth, adminOnly, wardcontroller.deleteWard);

export default router;