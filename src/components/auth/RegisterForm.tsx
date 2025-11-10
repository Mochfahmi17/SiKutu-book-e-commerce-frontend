import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { registerSchema } from "../../schemas/registerSchema";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerSchema) });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    console.log("data: ", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8 space-y-6">
      <div className="space-y-6">
        <div className="grid gap-1">
          <label
            htmlFor="name"
            className="w-fit text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            disabled={isSubmitting}
            {...register("name")}
            placeholder="John Doe"
            className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>
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
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="confirmPassword"
            className="w-fit text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              disabled={isSubmitting}
              {...register("confirmPassword")}
              placeholder="••••••••"
              className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-inset"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer transition-colors duration-300 hover:text-gray-800"
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="size-5" />
              ) : (
                <FaEye className="size-5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary flex w-full items-center justify-center gap-2 font-semibold"
      >
        {isSubmitting ? "Loading..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
