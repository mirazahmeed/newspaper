import React from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router";

const LatestNews = ({ data }) => {
	// Filter only trending news
	const trendingNews = data.filter(
		(item) => item.rating?.badge?.toLowerCase() === "trending"
	);
	console.log(trendingNews);
	return (
		<div className="flex gap-2 items-center bg-base-200 p-2 mt-2">
			<p className="text-base-100 bg-secondary px-3 py-1">Latest</p>
			<Marquee className=" flex gap-20" pauseOnHover={true} speed={50}>
				{trendingNews.map((news, idx) => (
					<Link
						key={idx}
						to={`/news_details/${news.id}`}
						className="hover:underline">
						{news.title}| 
					</Link>
				))}
			</Marquee>
		</div>
	);
};

export default LatestNews;
