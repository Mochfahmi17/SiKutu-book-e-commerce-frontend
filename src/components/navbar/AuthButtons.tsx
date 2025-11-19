import { Link } from "react-router";

const AuthButtons = () => {
  return (
    <div className="hidden items-center justify-evenly gap-4 text-sm font-semibold lg:flex">
      <Link to="/masuk" className="rounded-full border px-6 py-2">
        Masuk
      </Link>
      <Link
        to="/daftar"
        className="rounded-full border bg-gray-800 px-6 py-2 text-white hover:bg-gray-700"
      >
        Daftar
      </Link>
    </div>
  );
};

export default AuthButtons;
