import z from "zod";

export const loginSchema = z.object({
  email: z.email({ error: "Email tidak valid." }),
  password: z.string().min(1, "Password tidak boleh kosong."),
});

export const registerSchema = z
  .object({
    name: z.string({ error: "Nama wajib diisi." }).min(1, "Nama wajib diisi."),
    email: z.email({ error: "Email tidak valid." }),
    password: z
      .string({ error: "Error wajib diisi." })
      .min(6, "Password minimal 6 karakter."),
    confirmPassword: z
      .string({ error: "Konfirmasi password wajib diisi." })
      .min(6, "Konfirmasi password minimal 6 karakter."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error:
      "Password tidak cocok. Pastikan password dan konfirmasi password sama.",
    path: ["confirmPassword"],
  });
