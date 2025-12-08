import formatDate from "../../../utils/formatDate";

type BookInformationProps = {
  language: string;
  author: string;
  releaseDate: Date;
  pages: number;
};

const BookInformation = ({
  language,
  author,
  releaseDate,
  pages,
}: BookInformationProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">Informasi Buku</p>
      <div className="grid grid-cols-2">
        <div className="space-y-6 lg:space-y-2">
          <label className="grid align-baseline lg:grid-cols-4">
            <h2 className="text-sm text-gray-500">Bahasa</h2>
            <div className="col-span-3 text-sm font-semibold">
              <span className="mr-1 hidden lg:inline">:</span>
              {language}
            </div>
          </label>
          <label className="grid align-baseline lg:grid-cols-4">
            <h2 className="text-sm text-gray-500">Penulis</h2>
            <div className="col-span-3 text-sm font-semibold">
              <span className="mr-1 hidden lg:inline">:</span>
              {author}
            </div>
          </label>
        </div>
        <div className="space-y-6 lg:space-y-2">
          <label className="grid align-baseline lg:grid-cols-4">
            <h2 className="text-sm text-gray-500">Tanggal Rilis</h2>
            <div className="col-span-3 text-sm font-semibold">
              <span className="mr-1 hidden lg:inline">:</span>
              {formatDate(new Date(releaseDate))}
            </div>
          </label>
          <label className="grid align-baseline lg:grid-cols-4">
            <h2 className="text-sm text-gray-500">Halaman</h2>
            <div className="col-span-3 text-sm font-semibold">
              <span className="mr-1 hidden lg:inline">:</span>
              {pages} Halaman
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookInformation;
