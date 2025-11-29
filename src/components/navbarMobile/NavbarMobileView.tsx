import { RiHome4Line, RiDiscountPercentLine } from "react-icons/ri";
import { TbCategory2 } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import NavbarMobileItem from "./NavbarMobileItem";

const menus = [
  {
    label: "Beranda",
    to: "/",
    icon: <RiHome4Line className="size-6" />,
  },
  {
    label: "Kategori",
    to: "/kategori",
    icon: <TbCategory2 className="size-6" />,
  },
  {
    label: "Promo",
    to: "/promo",
    icon: <RiDiscountPercentLine className="size-6" />,
  },
  {
    label: "Profil",
    to: "/profil",
    icon: <FaRegCircleUser className="size-6" />,
  },
];

const NavbarMobileView = () => {
  return (
    <div className="sticky inset-x-0 bottom-0 z-40 border border-gray-200 bg-white py-4 shadow-sm lg:hidden lg:py-6">
      <div className="container mx-auto px-[5%] lg:px-[3%]">
        <nav>
          <ul className="flex items-center">
            {menus.map((menu, i) => (
              <li key={i} className="flex-1">
                <NavbarMobileItem
                  to={menu.to}
                  icon={menu.icon}
                  label={menu.label}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarMobileView;
