import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 transition-all duration-300 hover:text-gray-700"
    >
      <img src={logo} alt="SiKutu Logo" className="w-10 object-cover md:w-12" />
      <h1 className="text-xl font-bold tracking-wider md:text-2xl">SiKutu</h1>
    </Link>
  );
};

export default Logo;
