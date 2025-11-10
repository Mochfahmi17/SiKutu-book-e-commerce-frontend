import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-14">
      <div className="container mx-auto px-[3%] text-slate-300">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 transition-all duration-300"
            >
              <img
                src={logo}
                alt="SiKutu Logo"
                className="w-10 object-cover md:w-12"
              />
              <h1 className="mb-3 text-xl font-bold tracking-wider text-white md:text-2xl">
                SiKutu
              </h1>
            </Link>
            <p className="text-sm leading-relaxed">
              Discover and buy your favorite books from famous authors and new
              voices alike. We&apos;re here for every true book lover.
            </p>
          </div>
          <div className="">
            <h3 className="mb-3 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition-all duration-300 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className="transition-all duration-300 hover:text-white"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/author"
                  className="transition-all duration-300 hover:text-white"
                >
                  Authors
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="transition-all duration-300 hover:text-white"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-3 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition-all duration-300 hover:text-white"
                >
                  Email Us
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className="transition-all duration-300 hover:text-white"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/author"
                  className="transition-all duration-300 hover:text-white"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="transition-all duration-300 hover:text-white"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-3 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-white">
                <FaFacebookF className="size-6" />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter className="size-6" />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24 border-t border-gray-500 py-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SiKutu. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
