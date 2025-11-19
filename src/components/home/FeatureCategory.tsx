import clsx from "clsx";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BookCard from "../BookCard";
import { useFetchAllCategoriesQuery } from "../../store/features/categories/categoriesApi";
import { useFetchBooksByCategoryQuery } from "../../store/features/books/bookApi";

const FeatureCategory = () => {
  const [currentCategorySlug, setcurrentCategorySlug] =
    useState<string>("all-genre");

  const { data: categoryResponse } = useFetchAllCategoriesQuery();

  const categories = categoryResponse
    ? [
        { _id: "all", name: "All Genre", slug: "all-genre" },
        ...categoryResponse.data,
      ]
    : [];

  const { data: bookResponse } =
    useFetchBooksByCategoryQuery(currentCategorySlug);
  const books = bookResponse ? bookResponse.data : [];
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
              {categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => setcurrentCategorySlug(category.slug)}
                  className={clsx(
                    "cursor-pointer border-b-2 border-transparent pb-2 whitespace-nowrap transition-colors duration-300 hover:border-b-yellow-500 hover:text-yellow-500",
                    {
                      "border-b-yellow-500 text-yellow-500":
                        currentCategorySlug === category.slug,
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
            {books.length > 0 &&
              books.map((book) => (
                <SwiperSlide key={book._id}>
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
