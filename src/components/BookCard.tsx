import { Link } from "react-router";
import type { Books, Buku } from "../types";
import formatToMoney from "../utils/formatToMoney";
import { FaRegStar } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { toast } from "sonner";
import { addToCart } from "../store/features/cart/cartSlice";

type BookCardProps = {
  book: Buku;
};

const BookCard = ({ book }: BookCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleAddToCart = (product: Books) => {
    const exists = cartItems.some((item) => item._id === book._id);

    if (exists) {
      toast.error("Item already exists.");
    } else {
      const cartItems = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        coverBook: product.coverBook,
        category: product.category,
      };
      dispatch(addToCart(cartItems));
      toast.success("Item added successfully.");
    }
  };
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="relative aspect-3/4 w-full overflow-hidden">
        <Link to={`/books/${book.slug}`}>
          <img
            src={
              book.coverBook
                ? `http://localhost:3000/uploads/cover/${book.coverBook}`
                : "/"
            }
            alt={`Cover of ${book.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <span className="absolute top-3 left-3 rounded-md bg-yellow-400/90 px-2 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm">
          {book.category.name}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <Link to={`/books/${book.slug}`}>
            <h3 className="inline truncate text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
              {book.title}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-gray-500">{book.author.name}</p>
        </div>

        <div className="mt-4 flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-700">
            {/* {book.averageRating.toFixed(1)} */}0
          </span>
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <FaRegStar key={i} className="size-4 text-yellow-300" />
            ))}
          </div>
          <span className="text-xs text-gray-600">
            {/* ({book.numReviews} reviews) */}
            (0 reviews)
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-xl font-bold text-gray-900">
          {formatToMoney(book.price)}
        </span>
        <button
          onClick={() => handleAddToCart(book)}
          className="flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-3 py-2 text-sm font-medium text-gray-900 transition-all hover:bg-gray-800 hover:text-white"
        >
          <IoBagOutline className="size-4" />
          Add
        </button>
      </div>
    </div>
  );
};

export default BookCard;
