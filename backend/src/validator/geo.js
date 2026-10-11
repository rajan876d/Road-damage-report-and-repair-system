// validators/geo.js
import { z } from "zod";

 const wardSchema = z.object({
  name: z.string().min(2),
  number: z.number().int().positive(),
});

 const roadSchema = z.object({
  name: z.string().min(2),
  ward: z.string().length(24, "Invalid ward id"),
  roadType: z.enum(["Main", "Local"]).optional(),
  busRoute: z.boolean().optional(),
  nearSchoolOrHospital: z.boolean().optional(),
  twoPlusLanes: z.boolean().optional(),
  connectsWardsOrMarket: z.boolean().optional(),
});

export default {wardSchema, roadSchema};