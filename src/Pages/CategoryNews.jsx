import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
	const id  = useParams();
	const convertedId = parseInt(id.id);
	const data = useLoaderData();
		
	const [categoryNews, setCategoryNews] = useState([]);

	useEffect(() => {
		if (convertedId === 0) {
			setCategoryNews(data);
			return;
		} else if (convertedId === 1) {
			const filteredData = data.filter(
				(news) => news.others.is_today_pick === true
			);
			setCategoryNews(filteredData);
			return;
		} else {
			const filteredData = data.filter(
				(news) => news.category_id === convertedId
			);
			setCategoryNews(filteredData);
		}
	}, [data, convertedId]);

	return (
		<div>
			<h2 className="text-xl font-bold">The Daily Chronicles News</h2>
			<div className="grid grid-cols-1 gap-4">
				{categoryNews.map((news) => (
					<NewsCard key={news.id} news={news} />
				))}
			</div>
		</div>
	);
};

export default CategoryNews;
