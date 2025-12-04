import { Link } from "react-router";
import RegisterForm from "./RegisterForm";

const RegisterView = () => {
  return (
    <div className="relative flex items-center justify-center px-[5%] md:px-[3%]">
      <div className="w-full max-w-sm px-4">
        <div className="mb-8 space-y-1 text-center">
          <h1 className="text-2xl font-bold">Buat Akun Baru</h1>
          <p className="text-sm text-gray-600">
            Bergabung dan mulai jelajahi koleksi buku terbaik
          </p>
        </div>
        <RegisterForm />
      </div>
      <p className="absolute bottom-6 text-sm text-gray-600">
        Sudah punya akun ?{" "}
        <Link
          to="/login"
          className="font-semibold text-gray-800 hover:text-gray-700"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterView;
