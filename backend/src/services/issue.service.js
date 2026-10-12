import Issue from "../models/issue.js";
import Road from "../models/road.js";

export const createIssue = async (userId, data) => {
  const road = await Road.findById(data.road);
  if (!road) {
    throw {
        message: "Road not found",
    }
  } 
  if (String(road.ward) !== data.ward)
    throw {
        message: "Road does not belong to this ward",
    };

  // duplicate merging: same road + same damage type + still open
  const existing = await Issue.findOne({
    road: data.road,
    damageType: data.damageType,
    status: { $ne: "Fixed" },
  });

  if (existing) {
    if (existing.reporters.some((id) => String(id) === String(userId))) {
      throw {
        message: "You already reported this damage",
      };
    }
    existing.reporters.push(userId);
    existing.reportCount += 1;
    await existing.save();
    return { issue: existing, merged: true };
  }

  const issue = await Issue.create({ ...data, reporters: [userId] });
  return { issue, merged: false };
};
