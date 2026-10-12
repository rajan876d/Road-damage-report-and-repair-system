import { z } from "zod";

 const createIssueSchema = z.object({
  ward: z.string().min(1),
  road: z.string().min(1),
  damageType: z.enum(["pothole", "crack", "other"]),
  description: z.string().optional(),
  location: z.object({ lat: z.number(), lng: z.number() }).optional(),
});

export default createIssueSchema ;