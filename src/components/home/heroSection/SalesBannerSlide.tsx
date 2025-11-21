import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Sale } from "../../../types";
import SalesBannerControls from "./SalesBannerControls";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SalesBannerContent from "./SalesBannerContent";

type SalesBannerSlide = {
  data: Sale[];
};

const SalesBannerSlide = ({ data }: SalesBannerSlide) => {
  return (
    <div className="group relative">
      <SalesBannerControls />
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={true}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        spaceBetween={20}
        modules={[Pagination, Navigation, Autoplay]}
        onInit={(swiper) => {
          const nav = swiper.params.navigation;
          if (!nav || nav === true) return;

          nav.prevEl = ".swiper-button-prev-custom";
          nav.nextEl = ".swiper-button-next-custom";

          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="swiper"
      >
        {data.map((data) => (
          <SwiperSlide key={data._id}>
            <SalesBannerContent item={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SalesBannerSlide;
