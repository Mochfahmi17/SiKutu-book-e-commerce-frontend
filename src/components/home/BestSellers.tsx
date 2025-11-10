import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";
import type { Books } from "../../types";

import BookCard from "../BookCard";
import { useEffect, useState } from "react";

const BestSellers = () => {
  const [books, setBooks] = useState<Books[] | []>([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <section className="pt-14 pb-8">
      <div className="container mx-auto px-[3%] text-gray-600">
        <div className="mb-8 flex items-center justify-between gap-6 md:gap-12">
          <div className="flex flex-col">
            <p className="text-xl">Our</p>
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Sellers
            </h2>
          </div>
          <Link
            to="/books/best-sellers"
            className="group inline-flex items-center gap-2 font-semibold text-blue-500 transition-all duration-300 hover:text-blue-600"
          >
            <span>See all</span>{" "}
            <FaChevronRight className="transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Book Listing by Sellers */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.length > 0 &&
            books.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
