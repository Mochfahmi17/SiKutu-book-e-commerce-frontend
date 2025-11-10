import clsx from "clsx";
import { useEffect, useState } from "react";
import type { Books } from "../../types";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BookCard from "../BookCard";

const FeatureCategory = () => {
  const [currentCategory, setcurrentCategory] = useState<string>("All Genre");
  const [books, setBooks] = useState<Books[] | []>([]);

  const cateogries = [
    { id: 1, name: "All Genre" },
    { id: 2, name: "Fiction" },
    { id: 3, name: "Non-Fiction" },
    { id: 4, name: "Mystery" },
    { id: 5, name: "Sci-Fi & Fantasy" },
  ];

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks =
    currentCategory === "All Genre"
      ? books
      : books.filter((book) => book.category === currentCategory);
  return (
    <section className="pt-14 pb-8">
      <div className="container mx-auto px-[3%] text-gray-600">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="flex flex-col">
            <p className="text-xl">Featured</p>
            <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
          </div>
          <div className="overflow-x-auto text-gray-800">
            <nav
              aria-label="Category Navigation"
              className="flex w-max gap-8 px-2 font-semibold"
            >
              {cateogries.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setcurrentCategory(category.name)}
                  className={clsx(
                    "cursor-pointer border-b-2 border-transparent pb-2 whitespace-nowrap transition-colors duration-300 hover:border-b-yellow-500 hover:text-yellow-500",
                    {
                      "border-b-yellow-500 text-yellow-500":
                        currentCategory === category.name,
                    },
                  )}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Book Listing by Category */}
        <div className="relative">
          <Swiper
            navigation={true}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1180: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Navigation]}
            className="swiper"
          >
            {filteredBooks.length > 0 &&
              filteredBooks.map((book) => (
                <SwiperSlide key={book.id}>
                  <BookCard book={book} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeatureCategory;
