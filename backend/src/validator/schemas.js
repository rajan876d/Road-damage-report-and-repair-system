import { z } from "zod";

 const registerSchema = z.object({
  name: z.string().trim().min(5, "Name is too short"),
  email: z.string().trim().toLowerCase().email("Invalid email"),
  password: z.string().min(6, "Password must be 6+ characters"),
});

 const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export default { registerSchema, loginSchema };
