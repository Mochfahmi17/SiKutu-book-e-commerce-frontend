import { IoReload } from "react-icons/io5";
import BannerImageSkeleton from "../../BannerImageSkeleton";

type SalesBannerFallbackProps = {
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

const SalesBannerFallback = ({
  isLoading,
  refetch,
}: SalesBannerFallbackProps) => {
  if (isLoading) return <BannerImageSkeleton />;

  return (
    <div className="flex aspect-4/1 w-full items-center justify-center rounded-xl">
      <button
        onClick={refetch}
        className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-xl font-semibold hover:bg-gray-100"
      >
        <IoReload className="size-6" />
        Reload
      </button>
    </div>
  );
};

export default SalesBannerFallback;
