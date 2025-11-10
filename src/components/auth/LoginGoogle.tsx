import { FcGoogle } from "react-icons/fc";

const LoginGoogle = () => {
  return (
    <button className="mb-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-200 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:bg-slate-50">
      <FcGoogle className="size-5" /> Google
    </button>
  );
};

export default LoginGoogle;
