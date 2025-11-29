import { IoReload } from "react-icons/io5";
import BannerImageSkeleton from "../../BannerImageSkeleton";

type NewReleaseBookFallbackProps = {
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

const NewReleaseBookFallback = ({
  isLoading,
  refetch,
}: NewReleaseBookFallbackProps) => {
  if (isLoading) return <BannerImageSkeleton />;

  return (
    <div className="flex h-8 w-full flex-col items-center justify-center rounded-xl bg-slate-50">
      <p className="text-center text-2xl font-bold">Something went wrong!</p>
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
