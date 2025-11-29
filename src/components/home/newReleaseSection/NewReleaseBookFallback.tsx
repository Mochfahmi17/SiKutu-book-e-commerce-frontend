import { IoReload } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BookCardSkeleton from "../../BookCardSkeleton";
import { useState } from "react";
import NewReleaseBookControls from "./NewReleaseBookControls";

type NewReleaseBookFallbackProps = {
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

const NewReleaseBookFallback = ({
  isLoading,
  refetch,
}: NewReleaseBookFallbackProps) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  if (isLoading)
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
          {Array.from({ length: 6 }, (_, i) => (
            <SwiperSlide key={i}>
              <BookCardSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );

  return (
    <div className="flex h-[calc(100vh-70vh)] w-full items-center justify-center rounded-xl">
      <button
        onClick={refetch}
        className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-xl font-semibold transition-colors duration-300 hover:bg-gray-100"
      >
        <IoReload className="size-6" />
        Reload
      </button>
    </div>
  );
};

export default NewReleaseBookFallback;
