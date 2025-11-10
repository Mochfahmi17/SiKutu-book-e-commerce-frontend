import { Link } from "react-router";
import logo from "../../assets/logo.png";
import LoginForm from "./LoginForm";
import LoginGoogle from "./LoginGoogle";

const Login = () => {
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
            <h2 className="text-xl font-semibold text-gray-800">Welcome!</h2>
            <p className="text-sm text-gray-500">
              Sign in to your account to continue.
            </p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Divide */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">Or login with</span>
            </div>
          </div>

          {/* Login Google */}
          <LoginGoogle />

          {/* Register */}
          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-500 transition-colors duration-300 hover:text-blue-600"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
