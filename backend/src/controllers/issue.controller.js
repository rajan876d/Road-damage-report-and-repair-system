import * as issueService from "../services/issue.service.js";

 const createIssue = async (req, res) => {
  try {
    const { issue, merged } = await issueService.createIssue(req.user._id, req.body);
    res.status(merged ? 200 : 201).json({
      message: merged ? "Added to an existing report" : "Report created",
      issue,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export default {createIssue};