import { Link } from "react-router";

const AuthButtons = () => {
  return (
    <div className="hidden items-center justify-evenly gap-4 text-sm font-semibold lg:flex">
      <Link to="/login" className="rounded-full border px-5 py-2">
        Masuk
      </Link>
      <Link
        to="/register"
        className="rounded-full border bg-gray-800 px-5 py-2 text-white hover:bg-gray-700"
      >
        Daftar
      </Link>
    </div>
  );
};

export default AuthButtons;
