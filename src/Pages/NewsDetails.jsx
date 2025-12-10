import React, { useEffect, useState } from "react";
import Header from "../COmponents/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
	const data = useLoaderData();
	const { id } = useParams();
	const [news, setNews] = useState({});

	useEffect(() => {
		const newsDetails = data.find((news) => news.id === id);
		setNews(newsDetails);
	}, [data, id]);

	return (
		<div>
			<header>
				<Header></Header>
			</header>
			<main className="grid grid-cols-12 container mx-auto gap-5">
				<section className="col-span-9">
					<h2 className="text-2xl font-bold">News Details</h2>
					<NewsDetailsCard news={news}></NewsDetailsCard>
				</section>
				<aside className="col-span-3">
					<RightAside></RightAside>
				</aside>
			</main>
		</div>
	);
};

export default NewsDetails;
