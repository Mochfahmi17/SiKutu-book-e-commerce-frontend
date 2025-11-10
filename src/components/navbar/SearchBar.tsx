import clsx from "clsx";
import { RiCloseFill, RiSearchLine } from "react-icons/ri";

type SearchBarProps = {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar = ({ showSearch, setShowSearch }: SearchBarProps) => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className={clsx(
          "absolute -right-2 rounded-full border border-gray-200 bg-slate-50 text-sm transition-all duration-300 ease-in-out outline-none",
          {
            "w-full min-w-[310px] py-2 pr-8 pl-4 opacity-100 md:w-64":
              showSearch,
            "right-0 w-0 p-0 opacity-0": !showSearch,
          },
        )}
      />
      <button
        type="button"
        title={showSearch ? "Close" : "Search"}
        onClick={() => setShowSearch(!showSearch)}
        className="z-10 cursor-pointer hover:text-gray-600"
      >
        {showSearch ? (
          <RiCloseFill className="size-5 text-red-500" />
        ) : (
          <RiSearchLine className="size-5" />
        )}
      </button>
    </div>
  );
};

export default SearchBar;
