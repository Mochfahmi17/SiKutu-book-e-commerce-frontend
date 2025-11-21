import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const SalesBannerControls = () => {
  return (
    <>
      <button className="swiper-button-prev-custom absolute top-1/2 -left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white p-3 opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 hover:bg-gray-100 md:-left-6">
        <FaChevronLeft className="size-4 md:size-6" />
      </button>

      <button className="swiper-button-next-custom absolute top-1/2 -right-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white p-3 opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 hover:bg-gray-100 md:-right-6">
        <FaChevronRight className="size-4 md:size-6" />
      </button>
    </>
  );
};

export default SalesBannerControls;
