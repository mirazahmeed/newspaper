import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow border border-gray-100 p-4 space-y-4">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
            <img
              src={news.author.img}
              alt={news.author.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800">
              {news.author.name}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <button className="btn btn-sm btn-ghost rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
              d="M8.25 9.75L15.75 4.5m-7.5 4.5l7.5 5.25m-7.5-5.25L6 8.25m2.25 1.5L6 12m9.75-7.5A2.25 2.25 0 1118 6.75 2.25 2.25 0 0115.75 4.5zm0 9A2.25 2.25 0 1118 15.75 2.25 2.25 0 0115.75 13.5zm-9 3A2.25 2.25 0 119 18.75 2.25 2.25 0 016.75 16.5z" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold leading-snug text-gray-900">
        {news.title}
      </h2>

      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs">
        {news.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 px-2 py-1 rounded-full text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Details */}
      <p className="text-gray-600 text-sm line-clamp-3">
        {news.details}
      </p>

      <a href="#" className="inline-flex text-xs font-semibold text-red-500 hover:underline">
        Read More
      </a>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className={`h-4 w-4 ${
                  i < news.rating.number ? "fill-orange-400" : "fill-gray-300"
                }`}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0L6.515 16.29c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-700">
            {news.rating.badge}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
            viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
              d="M2.25 12s2.5-6.75 9.75-6.75S21.75 12 21.75 12s-2.5 6.75-9.75 6.75S2.25 12 2.25 12z" />
            <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
          </svg>
          <span>{news.total_view}</span>
        </div>
      </div>

      {/* Badges */}
      <div className="flex gap-2 pt-2">
        {news.others?.is_today_pick && (
          <span className="badge badge-primary">Today's Pick</span>
        )}
        {news.others?.is_trending && (
          <span className="badge badge-secondary">Trending</span>
        )}
      </div>

    </div>
  );
};

export default NewsCard;
