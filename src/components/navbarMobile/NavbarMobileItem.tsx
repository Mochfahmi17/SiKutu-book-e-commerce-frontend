import { NavLink } from "react-router";

type NavbarMobileItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};
const NavbarMobileItem = ({ to, icon, label }: NavbarMobileItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 transition-colors duration-300 hover:text-gray-600 ${isActive ? "text-gray-600" : "text-gray-400"}`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default NavbarMobileItem;
