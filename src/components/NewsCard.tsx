import { Link } from "react-router";
import type { NewsArticle } from "../types";
import dateFormat from "../utils/dateFormat";

type NewsCardProps = {
  news: NewsArticle;
};

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video h-64 w-full">
        <img
          src={news.image}
          alt={news.title}
          className="absolute inset-0 object-cover"
        />
        <span className="absolute top-3 left-3 rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
          {dateFormat(new Date(news.createdAt))}
        </span>
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black via-black via-10% to-transparent px-3 py-6 text-white">
          <Link to="/news">
            <h3 className="truncate pb-1 text-lg font-semibold hover:border-b hover:border-white">
              {news.title}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-2 text-sm">{news.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
