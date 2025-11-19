import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router";

const CategoryMenu = () => {
  return (
    <div className="group relative hidden cursor-pointer py-2 lg:block">
      <button className="flex cursor-pointer items-center gap-4 font-semibold">
        Kategori
        <IoChevronDownOutline className="size-3" />
      </button>

      <div className="absolute top-full left-0 hidden w-64 rounded-lg border border-gray-200 bg-white shadow-lg group-hover:block">
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
  );
};

export default CategoryMenu;
