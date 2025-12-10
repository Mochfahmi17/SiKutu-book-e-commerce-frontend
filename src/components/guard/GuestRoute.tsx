import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const GuestRoute = () => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <div className="fixed inset-0 bg-white" />;
  }

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
