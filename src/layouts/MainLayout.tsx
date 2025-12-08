import { Outlet } from "react-router";
import NavbarView from "../components/navbar/NavbarView";
import NavbarMobileView from "../components/navbarMobile/NavbarMobileView";
import FooterView from "../components/footer/FooterView";
import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <NavbarView />
      <main className="bg-white text-gray-800 lg:min-h-screen">
        <Outlet />
      </main>
      <FooterView />
      <NavbarMobileView />
    </>
  );
}
