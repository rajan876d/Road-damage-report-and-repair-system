import  Router  from "express";
import authController from "../controllers/auth.controller.js";
import auth from "../middleware/auth.js";
import validate from "../middleware/validate.js";
import zodschema from "../validator/schemas.js";

const router = Router();

router.post("/register", validate(zodschema.registerSchema), authController.register);
router.post("/login", validate(zodschema.loginSchema), authController.login);
router.post("/logout", authController.logout);
router.get("/me", auth, authController.me);

export default router;