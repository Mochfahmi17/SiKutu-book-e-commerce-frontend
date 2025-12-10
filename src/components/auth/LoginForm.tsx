import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import type z from "zod";
import { loginSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginResponse } from "../../types";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const { setIsLoggedIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      try {
        const serverUrl = import.meta.env.PROD
          ? import.meta.env.VITE_SERVER_URL
          : "http://localhost:3000";

        const res = await fetch(`${serverUrl}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(values),
        });

        const data: LoginResponse = await res.json();

        if (!res.ok) {
          toast.error(data.message);
          return;
        }

        toast.success(data.message);
        setIsLoggedIn(true);
        navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
        toast.error("Terjadi kesalahan.");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
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
            disabled={isPending}
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
              disabled={isPending}
              className={`${errors.password ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:border-black focus:ring-black"} w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-gray-600 transition-all placeholder:text-gray-400 focus:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-800"
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
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full cursor-pointer rounded-md bg-gray-800 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-gray-700 disabled:opacity-50"
      >
        {isPending ? "Loading..." : "Masuk"}
      </button>
    </form>
  );
};

export default LoginForm;
