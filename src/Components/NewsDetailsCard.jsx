import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
	const {
		id,
		title,
		author,
		details,
		image_url,
		tags,
		thumbnail_url,
		total_view,
		rating,
		published_date,
		category_id,
	} = news;
	return (
		<div className="mx-auto bg-white shadow border border-gray-100 space-y-4 mt-4 p-4">
			<img className="w-full h-56 object-cover" src={image_url} alt="" />
			<h2 className="text-lg font-bold leading-snug text-gray-900">
				{title}
			</h2>
			<p className="text-gray-600 text-sm ">{details}</p>
			<Link className="btn btn-secondary" to={`/category/${category_id}`}>
				All News In This Category
			</Link>
		</div>
	);
};

export default NewsDetailsCard;
