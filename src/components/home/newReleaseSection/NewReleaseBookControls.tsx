import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type NewReleaseBookControlsProps = {
  isBeginning: boolean;
  isEnd: boolean;
};

const NewReleaseBookControls = ({
  isBeginning,
  isEnd,
}: NewReleaseBookControlsProps) => {
  return (
    <>
      <button
        className={`swiper-button-prev-newRelease absolute top-1/2 -left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-gray-200 bg-white p-3 shadow-xl transition-all duration-300 hover:bg-gray-100 md:-left-6 ${isBeginning ? "pointer-events-none opacity-0" : "opacity-0 group-hover:opacity-100"}`}
      >
        <FaChevronLeft className="size-4 md:size-6" />
      </button>

      <button
        className={`swiper-button-next-newRelease absolute top-1/2 -right-4 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-gray-200 bg-white p-3 shadow-xl transition-opacity duration-300 hover:bg-gray-100 md:-right-6 ${isEnd ? "pointer-events-none opacity-0" : "opacity-0 group-hover:opacity-100"}`}
      >
        <FaChevronRight className="size-4 md:size-6" />
      </button>
    </>
  );
};

export default NewReleaseBookControls;
