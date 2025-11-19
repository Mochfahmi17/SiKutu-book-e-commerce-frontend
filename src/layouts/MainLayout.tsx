import { Outlet } from "react-router";
import NavbarView from "../components/navbar/NavbarView";
import NavbarMobileView from "../components/navbarMobile/NavbarMobileView";

export default function MainLayout() {
  return (
    <>
      <NavbarView />
      <main className="min-h-screen bg-white text-gray-800">
        <Outlet />
      </main>
      <NavbarMobileView />
    </>
  );
}
