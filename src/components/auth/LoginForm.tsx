import { Link } from "react-router";
import { FaEye, FaEyeSlash, FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import type z from "zod";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log("data: ", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-6">
        <div className="grid gap-1">
          <label
            htmlFor="email"
            className="w-fit text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            disabled={isSubmitting}
            {...register("email")}
            placeholder="johndoe@email.com"
            className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="password"
            className="w-fit text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              disabled={isSubmitting}
              {...register("password")}
              placeholder="••••••••"
              className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer transition-colors duration-300 hover:text-gray-800"
            >
              {showPassword ? (
                <FaEyeSlash className="size-5" />
              ) : (
                <FaEye className="size-5" />
              )}
            </button>
          </div>
          <div className="item-center my-1 flex justify-between gap-2">
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
            <Link
              to="/forgot-password"
              className="ml-auto text-sm font-medium text-blue-500 transition-colors duration-300 hover:text-blue-600"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary flex w-full items-center justify-center gap-2 font-semibold"
      >
        {isSubmitting ? (
          "Loading..."
        ) : (
          <>
            <FaSignInAlt className="size-5" /> Login
          </>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
