import { useNavigate } from "react-router";
import bannerImg from "../../assets/hero-image.png";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-40 pb-14">
      <div className="container mx-auto px-[3%]">
        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="mb-7 text-2xl font-medium text-gray-900 md:text-5xl">
              New Release This Week
            </h1>
            <p className="mb-10 text-sm text-gray-600 md:text-base">
              It&apos;s time to update your reading list with some of the latest
              and gratest releases in the literary world. From heart-pumping
              thrillers to captivating memories, this week&apos;s new releases
              offer something for everyone
            </p>
            <button
              onClick={() => navigate("/books")}
              className="btn-primary border-2 border-gray-900 bg-transparent py-3 text-gray-800 hover:text-white"
            >
              Shop Now
            </button>
          </div>
          <div className="flex w-full items-center md:w-1/2 md:justify-end">
            <img src={bannerImg} alt="Banner Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
