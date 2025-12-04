import { Link } from "react-router";
import LoginForm from "./LoginForm";

const LoginView = () => {
  return (
    <div className="relative flex items-center justify-center px-[5%] md:px-[3%]">
      <div className="w-full max-w-sm px-4">
        <div className="mb-8 space-y-1 text-center">
          <h1 className="text-center text-2xl font-bold">Masuk ke Akunmu</h1>
          <p className="text-sm text-gray-600">
            Masukkan email dan password anda untuk melanjutkan belanja & koleksi
            bukumu
          </p>
        </div>
        <LoginForm />
      </div>
      <p className="absolute bottom-6 text-sm text-gray-600">
        Belum punya akun ?{" "}
        <Link
          to="/register"
          className="font-semibold text-gray-800 hover:text-gray-700"
        >
          Daftar
        </Link>
      </p>
    </div>
  );
};

export default LoginView;
