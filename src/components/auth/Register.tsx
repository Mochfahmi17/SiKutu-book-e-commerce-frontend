import { Link } from "react-router";
import logo from "../../assets/logo.png";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-[3%] text-gray-600">
        {/* Login Card */}
        <div className="w-full max-w-md rounded-lg bg-white p-6">
          {/* Login Header */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <img src={logo} alt="Logo" className="w-10 object-cover md:w-16" />
            <h1 className="text-3xl font-bold text-gray-800">SiKutu</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Create Your Account
            </h2>
            <p className="text-sm text-gray-500">
              Join us to explore and buy your favorite books anytime.
            </p>
          </div>

          {/* Login Form */}
          <RegisterForm />

          {/* Register */}
          <p className="text-center text-sm">
            Have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-500 transition-colors duration-300 hover:text-blue-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
