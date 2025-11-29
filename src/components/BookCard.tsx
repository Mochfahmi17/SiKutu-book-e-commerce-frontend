import { CiImageOff } from "react-icons/ci";
import { Link } from "react-router";
import type { Book } from "../types";
import formatMoney from "../utils/formatMoney";

type BookCardProps = {
  item: Book;
};

const BookCard = ({ item }: BookCardProps) => {
  console.log(item);
  return (
    <div className="flex h-[360px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:w-full lg:h-[380px]">
      <div className="flex aspect-6/8 flex-col items-center justify-center gap-2 bg-gray-100 text-gray-500">
        {item.coverBook ? (
          <Link
            to={`/books/${item.slug}`}
            className="relative block h-full w-full"
          >
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/uploads/cover/${item.coverBook}`}
              alt={item.coverBook}
              className="absolute h-full w-full object-cover object-center"
            />
          </Link>
        ) : (
          <>
            <CiImageOff className="size-8" />
            <span className="text-xs font-semibold">NO IMAGE AVAILABLE</span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 py-3">
        <div className="space-y-1">
          <p className="truncate text-[10px] font-semibold text-gray-500">
            {item.author.name}
          </p>

          <Link
            to={`/books/${item.slug}`}
            title={item.title}
            className="line-clamp-2 text-sm text-gray-800 capitalize transition-colors duration-300 hover:text-black"
          >
            {item.title}
          </Link>
        </div>

        <div className="mt-auto">
          {item.sales && item.sales.isActive && item.discountPrice ? (
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 text-xs font-bold">
                <span className="rounded-sm bg-red-100 px-1 py-0.5 text-red-500">
                  {item.sales.discountPercentage}%
                </span>{" "}
                <p className="text-gray-500 line-through">
                  {formatMoney(item.price)}
                </p>
              </div>
              <p className="font-bold">{formatMoney(item.discountPrice)}</p>
            </div>
          ) : (
            <p className="font-bold text-gray-800">{formatMoney(item.price)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
