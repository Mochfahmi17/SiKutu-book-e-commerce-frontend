import { FaChevronDown, FaUser } from "react-icons/fa6";
import type { LogoutResponse, User } from "../../types";
import { useState, useTransition } from "react";
import { Link, useNavigate } from "react-router";
import { IoChevronForward, IoLogOutOutline } from "react-icons/io5";
import { toast } from "sonner";
import { useAuth } from "../../hooks/useAuth";

type UserButtonProps = {
  user: User;
};

const UserButton = ({ user }: UserButtonProps) => {
  const { setIsLoggedIn, setUser } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const handleLogout = () => {
    startTransition(async () => {
      try {
        const serverUrl = import.meta.env.PROD
          ? import.meta.env.VITE_SERVER_URL
          : "http://localhost:3000";

        const res = await fetch(`${serverUrl}/api/auth/logout`, {
          method: "POST",
          credentials: "include",
        });

        const data: LogoutResponse = await res.json();

        if (!res.ok) {
          toast.error(data.message);
          return;
        }

        toast.success(data.message);
        setIsLoggedIn(false);
        setUser(null);
        navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
        toast.error("Terjadi kesalahan.");
      }
    });
  };
  return (
    <div className="relative hidden lg:block">
      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center gap-2"
      >
        {user.profileImage ? (
          <>
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/uploads/profile/${user.profileImage}`}
              alt={user.name}
              className="h-8 w-8 rounded-full border border-gray-200"
            />
            <FaChevronDown
              className={`${open ? "rotate-180" : "rotate-0"} size-4 transition-transform duration-300`}
            />
          </>
        ) : (
          <>
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-200 bg-gray-900">
              <FaUser className="absolute bottom-0 left-1/2 size-6 -translate-x-1/2 text-gray-600" />
            </div>
            <FaChevronDown
              className={`${open ? "rotate-180" : "rotate-0"} size-4 transition-transform duration-300`}
            />
          </>
        )}
      </div>

      {open && (
        <div className="absolute right-0 mt-3 w-[360px] rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
          <div className="flex items-center gap-4 p-4">
            {user.profileImage ? (
              <img
                src={`${import.meta.env.VITE_SERVER_URL}/uploads/profile/${user.profileImage}`}
                alt={user.name}
                className="h-12 w-12 shrink-0 rounded-full border border-gray-200"
              />
            ) : (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-900">
                <FaUser className="absolute bottom-0 left-1/2 size-9 -translate-x-1/2 text-gray-600" />
              </div>
            )}

            <div className="flex flex-1 flex-col">
              <h4 className="w-full max-w-60 truncate font-extrabold capitalize">
                {user.name}
              </h4>
              <p className="text-xs text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 p-4">
            <ul className="space-y-3 text-sm text-gray-800 duration-300 hover:text-black">
              <li>
                <Link to="/" className="flex items-center justify-between">
                  <span>Transaksi</span> <IoChevronForward className="size-6" />
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center justify-between">
                  <span>Favorit</span> <IoChevronForward className="size-6" />
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center justify-between">
                  <span>Akun</span> <IoChevronForward className="size-6" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 pt-4 text-sm text-gray-800 duration-300 hover:text-black">
            <button
              onClick={handleLogout}
              disabled={isPending}
              className="flex w-full cursor-pointer items-center gap-2 disabled:opacity-50"
            >
              <IoLogOutOutline className="size-5" /> <span>Keluar Akun</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserButton;
