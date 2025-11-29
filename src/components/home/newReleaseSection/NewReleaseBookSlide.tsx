import { Swiper, SwiperSlide } from "swiper/react";
import type { Book } from "../../../types";
import { Navigation } from "swiper/modules";
import NewReleaseBookControls from "./NewReleaseBookControls";
import BookCard from "../../BookCard";
import { useState } from "react";

type NewReleaseBookSlideProps = {
  data: Book[];
};

const NewReleaseBookSlide = ({ data }: NewReleaseBookSlideProps) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="group relative">
      <NewReleaseBookControls isBeginning={isBeginning} isEnd={isEnd} />
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev-newRelease",
          nextEl: ".swiper-button-next-newRelease",
        }}
        spaceBetween={20}
        slidesPerView={2}
        modules={[Navigation]}
        onInit={(swiper) => {
          const nav = swiper.params.navigation;
          if (!nav || nav === true) return;

          nav.nextEl = ".swiper-button-next-newRelease";
          nav.prevEl = ".swiper-button-prev-newRelease";

          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        className="swiper pb-2!"
      >
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            <BookCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewReleaseBookSlide;
