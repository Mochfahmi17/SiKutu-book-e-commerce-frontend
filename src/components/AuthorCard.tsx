import type { Author } from "../types";

type AuthorCardProps = {
  author: Author;
};

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <div className="group flex flex-col items-center">
      <img
        src={author.image}
        alt={author.name}
        className="mb-6 w-60 rounded-full shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
      />
      <h3 className="mb-1 text-lg font-semibold text-gray-800">
        {author.name}
      </h3>
      <p className="mb-8 text-sm text-gray-500">{author.description}</p>
      <button className="cursor-pointer rounded-md bg-gray-900 px-12 py-2 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-gray-800">
        Explore Books
      </button>
    </div>
  );
};

export default AuthorCard;
