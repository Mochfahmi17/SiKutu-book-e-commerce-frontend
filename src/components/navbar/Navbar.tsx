import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import UserMenu from "./UserMenu";
import MobileSidebar from "./MobileSidebar";
import clsx from "clsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const currentUser = false;

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-10 py-6 text-gray-800 transition-all duration-300",
        { "bg-white shadow-sm": hasShadow },
      )}
    >
      <nav className="container mx-auto px-[3%]">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              title="Menu"
              onClick={() => setShowSidebar(!showSidebar)}
              className="cursor-pointer hover:text-gray-600 md:hidden"
            >
              <FaBars className="size-5" />
            </button>
            <Logo />
          </div>

          {/* Right Side */}
          <div className="relative flex items-center gap-4 lg:gap-8">
            <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
            <CartIcon count={cartItems.length} />
            <UserMenu
              currentUser={currentUser}
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
              navigation={navigation}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        currentUser={currentUser}
        navigation={navigation}
      />
    </header>
  );
};

export default Navbar;
