import clsx from "clsx";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router";
import avatarBoy from "../../assets/user-boy.png";

type MobileSidebarProps = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: boolean;
  navigation: { name: string; href: string }[];
};

const MobileSidebar = ({
  showSidebar,
  setShowSidebar,
  currentUser,
  navigation,
}: MobileSidebarProps) => {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          {
            "visible opacity-100": showSidebar,
            "invisible opacity-0": !showSidebar,
          },
        )}
        onClick={() => setShowSidebar(false)}
      ></div>
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden",
          { "translate-x-0": showSidebar, "-translate-x-full": !showSidebar },
        )}
      >
        <div className="flex items-center justify-between border-b border-b-gray-200 px-4 py-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            type="button"
            title="Close"
            onClick={() => setShowSidebar(false)}
            className="cursor-pointer hover:text-gray-600 md:hidden"
          >
            <RiCloseFill className="size-5" />
          </button>
        </div>
        {currentUser ? (
          <div className="px-4 py-6">
            <div className="mb-4 flex items-center gap-3">
              <img
                src={avatarBoy}
                alt="User"
                className="size-10 rounded-full ring-2 ring-blue-500"
              />
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-600">john@example.com</p>
              </div>
            </div>
            <ul className="py-2">
              {navigation.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.href}
                    onClick={() => setShowSidebar(false)}
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-md bg-red-500 px-3 py-2 text-left text-white hover:bg-red-600">
              Logout
            </button>
          </div>
        ) : (
          <div className="p-4">
            <ul>
              <li>
                <Link
                  to="/login"
                  onClick={() => setShowSidebar(false)}
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </aside>
    </>
  );
};

export default MobileSidebar;
