const BookActionButtons = () => {
  return (
    <div className="mt-14 flex items-center gap-4">
      <button className="cursor-pointer rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-gray-700">
        Tambah ke keranjang
      </button>
      <button className="cursor-pointer rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold shadow-sm transition-colors duration-300 hover:bg-slate-50">
        Tambahkan ke favorit
      </button>
    </div>
  );
};

export default BookActionButtons;
