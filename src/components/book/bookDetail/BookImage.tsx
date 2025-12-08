import { CiImageOff } from "react-icons/ci";

type BookImageProps = {
  coverBook?: string;
};

const BookImage = ({ coverBook }: BookImageProps) => {
  return (
    <div className="mx-auto h-[425px] max-w-80 overflow-hidden rounded-xl border border-gray-200 shadow-md">
      {coverBook ? (
        <img
          src={`${import.meta.env.VITE_SERVER_URL}/uploads/cover/${coverBook}`}
          alt=""
          className="h-full w-full object-contain"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-100">
          <CiImageOff className="size-8" />
          <span className="text-xs font-semibold">NO IMAGE AVAILABLE</span>
        </div>
      )}
    </div>
  );
};

export default BookImage;
