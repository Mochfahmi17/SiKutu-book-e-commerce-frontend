import z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required."),
    email: z.email("Invalid Email.").min(1, "Email is required."),
    password: z.string().min(8, "Password at least 8 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Password doesn't match.",
    path: ["password"],
  });
