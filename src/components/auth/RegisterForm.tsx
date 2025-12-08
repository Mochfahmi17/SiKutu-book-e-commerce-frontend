import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import type z from "zod";
import { registerSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-1">
          <label
            htmlFor="name"
            className={`${errors.name ? "text-red-500" : "text-gray-700 dark:text-gray-300"} w-fit text-sm font-medium`}
          >
            Nama:
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Masukkan nama anda"
            className={`${errors.name ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:border-black focus:ring-black"} w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-gray-600 transition-all placeholder:text-gray-400 focus:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white`}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="email"
            className={`${errors.email ? "text-red-500" : "text-gray-700 dark:text-gray-300"} w-fit text-sm font-medium`}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Masukkan email anda"
            className={`${errors.email ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:border-black focus:ring-black"} w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-gray-600 transition-all placeholder:text-gray-400 focus:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="password"
            className={`${errors.password ? "text-red-500" : "text-gray-700 dark:text-gray-300"} w-fit text-sm font-medium`}
          >
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="Masukkan password anda"
              className={`${errors.password ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:border-black focus:ring-black"} w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-gray-600 transition-all placeholder:text-gray-400 focus:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`${errors.password ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-gray-800"} absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer`}
            >
              {showPassword ? (
                <FaEyeSlash className="size-5 transition-colors duration-300" />
              ) : (
                <FaEye className="size-5 transition-colors duration-300" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="confirm_password"
            className={`${errors.confirmPassword ? "text-red-500" : "text-gray-700 dark:text-gray-300"} w-fit text-sm font-medium`}
          >
            Konfirmasi Password:
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm_password"
              {...register("confirmPassword")}
              placeholder="Masukkan konfirmasi password anda"
              className={`${errors.confirmPassword ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:border-black focus:ring-black"} w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-gray-600 transition-all placeholder:text-gray-400 focus:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={`${errors.confirmPassword ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-gray-800"} absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer`}
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="size-5 transition-colors duration-300" />
              ) : (
                <FaEye className="size-5 transition-colors duration-300" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full cursor-pointer rounded-md bg-gray-800 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-gray-700"
      >
        Daftar
      </button>
    </form>
  );
};

export default RegisterForm;
