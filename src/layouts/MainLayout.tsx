import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
