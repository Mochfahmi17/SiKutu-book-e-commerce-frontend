import { useParams } from "react-router";
import { useGetBookBySlugQuery } from "../../../store/books/booksApi";
import ProductNotFound from "../../ProductNotFound";
import BookDetailSkeleton from "../../BookDetailSkeleton";
import BookImage from "./BookImage";
import BookTitlePrice from "./BookTitlePrice";
import BookDescription from "./BookDescription";
import BookInformation from "./BookInformation";
import BookActionButtons from "./BookActionButtons";

const BookdetailView = () => {
  const { slug } = useParams();

  const {
    data: bookResponse,
    isLoading,
    isError,
  } = useGetBookBySlugQuery(slug);

  if (isLoading) {
    return <BookDetailSkeleton />;
  }

  if (!bookResponse || isError) {
    return <ProductNotFound />;
  }

  const book = bookResponse.data;

  return (
    <section className="pt-20 pb-16 md:pt-24 lg:pt-28">
      <div className="container mx-auto px-[5%] md:px-[3%]">
        <div className="flex flex-wrap gap-12">
          <BookImage coverBook={book.coverBook} bookTitle={book.title} />

          <div className="flex-1 space-y-4">
            <BookTitlePrice title={book.title} price={book.price} />

            <BookDescription description={book.description} />

            <BookInformation
              language={book.language}
              author={book.author.name}
              releaseDate={book.releaseDate}
              pages={book.pages}
            />

            <BookActionButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookdetailView;
