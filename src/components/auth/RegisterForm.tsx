import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form action="" className="space-y-8">
      <div className="space-y-6">
        <div className="grid gap-1">
          <label
            htmlFor="email"
            className="w-fit text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nama:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Masukkan nama anda"
            className="w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-gray-600 transition-all placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white"
          />
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="email"
            className="w-fit text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Masukkan email anda"
            className="w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-gray-600 transition-all placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white"
          />
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="password"
            className="w-fit text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Masukkan password anda"
              className="w-full rounded-md bg-slate-50 px-3 py-2 text-sm text-gray-600 transition-all placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white"
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
