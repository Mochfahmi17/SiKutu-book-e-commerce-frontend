import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

type BookDescriptionProps = {
  description: string;
};

const BookDescription = ({ description }: BookDescriptionProps) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">Deskripsi</p>
      <p className={`${!expand ? "line-clamp-3" : ""} text-sm text-gray-600`}>
        {description}
      </p>
      <button
        onClick={() => setExpand(!expand)}
        className="ml-auto flex cursor-pointer items-center gap-2 text-sm text-gray-800 underline hover:text-black"
      >
        {expand ? (
          <>
            <span>Ringkas Deskripsi</span>
            <FaChevronUp className="size-3" />
          </>
        ) : (
          <>
            <span>Baca Selengkapnya</span>
            <FaChevronDown className="size-3" />
          </>
        )}
      </button>
    </div>
  );
};

export default BookDescription;
