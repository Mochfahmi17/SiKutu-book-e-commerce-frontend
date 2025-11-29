import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useGetAllCategoriesQuery } from "../../store/categories/categoriesApi";

const CategoryMenu = () => {
  const { data: categoriesResponse, isLoading } = useGetAllCategoriesQuery();

  const categoriesData = categoriesResponse ? categoriesResponse.data : [];
  return (
    <div className="group relative hidden cursor-pointer py-2.5 lg:block">
      <button className="flex cursor-pointer items-center gap-4 font-semibold">
        Kategori
        <IoChevronDownOutline className="size-3" />
      </button>

      <div className="absolute top-full left-0 hidden max-h-60 w-64 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg group-hover:block">
        <ul>
          {categoriesData.length === 0 && isLoading ? (
            <li className="px-3 py-2 font-semibold hover:text-gray-600">
              Loading...
            </li>
          ) : (
            <>
              {categoriesData.map((category) => (
                <li key={category._id}>
                  <Link
                    to={`/books/category/${category.slug}`}
                    className="block w-full px-3 py-2 font-semibold hover:text-gray-600"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
