import { useEffect, useState } from "react";
import type { Author } from "../../types";
import AuthorCard from "../AuthorCard";
import { Link } from "react-router";

const FeatureAuthor = () => {
  const [authors, setAuthors] = useState<Author[] | []>([]);

  useEffect(() => {
    fetch("authors.json")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <section className="bg-white pt-14 pb-12">
      <div className="container mx-auto px-[3%] text-gray-600">
        <div className="mb-20 text-center">
          <h2 className="mb-1 text-2xl text-gray-800">
            Meet Your Favorite <span className="font-bold">Authors</span>
          </h2>
          <p className="text-sm text-gray-500">Meet Your Favorite Authors</p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {authors.length > 0 &&
            authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
        </div>

        <div className="flex items-center justify-center">
          <Link
            to="/authors"
            className="inline-block border-b pb-1 font-semibold text-gray-800 transition-all duration-300 hover:text-blue-500"
          >
            See All Authors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureAuthor;
