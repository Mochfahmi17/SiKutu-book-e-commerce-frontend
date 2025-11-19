import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router";

const CategoryMenu = () => {
  return (
    <div className="group relative hidden lg:block">
      <button className="flex cursor-pointer items-center gap-4 font-semibold">
        Kategori
        <IoChevronDownOutline className="size-3" />
      </button>

      <div className="absolute top-full hidden group-hover:block">
        <div className="mt-2 w-64 rounded-lg border border-gray-200 bg-white shadow-lg">
          <ul>
            <li>
              <Link
                to="/"
                className="block w-full px-3 py-2 font-semibold hover:text-gray-600"
              >
                Buku
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
