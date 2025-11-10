import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import type { NewsArticle } from "../../types";
import NewsCard from "../NewsCard";

const News = () => {
  const [news, setNews] = useState<NewsArticle[] | []>([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <section className="pt-14 pb-8">
      <div className="container mx-auto px-[3%] text-gray-600">
        <div className="mb-8 flex items-center justify-between gap-6 md:gap-12">
          <h2 className="text-2xl font-semibold text-gray-800">Latest News</h2>
          <Link
            to="/news"
            className="group inline-flex items-center gap-2 font-semibold text-blue-500 transition-all duration-300 hover:text-blue-600"
          >
            <span>See all</span>{" "}
            <FaChevronRight className="transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* News listing */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {news.length > 0 &&
            news.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsCard news={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
