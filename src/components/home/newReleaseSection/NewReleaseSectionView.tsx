import { Link } from "react-router";
import { useGetNewReleasesBooksQuery } from "../../../store/books/booksApi";
import NewReleaseBookFallback from "./NewReleaseBookFallback";
import NewReleaseBookSlide from "./NewReleaseBookSlide";

const NewReleaseSectionView = () => {
  const {
    data: booksResponse,
    isLoading,
    refetch,
    isError,
  } = useGetNewReleasesBooksQuery();

  const dataBooks = booksResponse ? booksResponse.data : [];
  const isEmpty = !isLoading && !isError && dataBooks.length === 0;
  return (
    <section className="pt-4 pb-8 lg:pt-8">
      <div className="container mx-auto px-[5%] md:px-[3%]">
        <div className="mb-8 flex items-center justify-between">
          <span className="block text-base font-bold lg:text-xl">
            Buku Baru Rilis
          </span>
          <Link
            to="/"
            className="text-sm font-bold text-gray-500 transition-colors duration-300 hover:text-gray-700"
          >
            Lihat Semua
          </Link>
        </div>
        <div>
          {isLoading || isError || isEmpty ? (
            <NewReleaseBookFallback
              isLoading={isLoading}
              isError={isError || isEmpty}
              refetch={refetch}
            />
          ) : (
            <NewReleaseBookSlide data={dataBooks} />
          )}
        </div>
      </div>
    </section>
  );
};

export default NewReleaseSectionView;
