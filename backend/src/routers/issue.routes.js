import express from "express";
import auth from "../middleware/auth.js";
import validate from "../middleware/validate.js";
import createIssueSchema from "../validator/issue.validation.js";
import issuecontroller from "../controllers/issue.controller.js";

const router = express.Router();

router.post("/", auth, validate(createIssueSchema), issuecontroller.createIssue);

export default router;