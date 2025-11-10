import { Link } from "react-router";
import avatarBoy from "../../assets/user-boy.png";
import { FaRegCircleUser } from "react-icons/fa6";

type UserMenuProps = {
  currentUser: boolean;
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: { name: string; href: string }[];
};

const UserMenu = ({
  currentUser,
  isDropdownOpen,
  setIsDropdownOpen,
  navigation,
}: UserMenuProps) => {
  return (
    <div className="relative">
      {currentUser ? (
        <>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            title="Account"
            className="hidden cursor-pointer rounded-full md:block"
          >
            <img
              src={avatarBoy}
              alt="User Icon"
              className="size-6 rounded-full ring-2 ring-blue-500"
            />
          </button>

          {/* Show Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 z-40 mt-3 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
              <ul className="py-2">
                {navigation.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <Link
          to="/login"
          title="Account"
          className="hidden cursor-pointer object-cover object-center hover:text-gray-600 md:block"
        >
          <FaRegCircleUser className="size-5" />
        </Link>
      )}
    </div>
  );
};

export default UserMenu;
