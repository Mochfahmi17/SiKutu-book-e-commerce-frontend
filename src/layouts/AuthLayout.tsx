import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="grid h-screen lg:grid-cols-2">
        <div className="hidden lg:block">
          <img
            src="/images/background-book.jpg"
            alt="book"
            className="h-full object-cover"
          />
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
