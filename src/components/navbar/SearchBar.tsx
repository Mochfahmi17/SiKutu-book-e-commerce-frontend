import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="relative flex-1">
      <CiSearch className="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-gray-600" />
      <input
        type="text"
        placeholder="Cari Produk, Judul Buku, Penulis"
        className="w-full rounded-full bg-slate-100 py-2.5 pr-4 pl-10 text-sm outline-none"
      />
    </div>
  );
};

export default SearchBar;
