import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Catagories = () => {
	const categories = use(categoryPromise);

	return (
		<div>
			<h2 className="font-bold">All Catagories ({categories.length})</h2>
			<div className="flex flex-col gap-2 mt-3">
				{categories.map((category) => (
					<NavLink
						className="btn bg-white border-0 justify-start  hover:bg-black hover:text-white rounded-none"
						to={`/category/${category.id}`}
						key={category.id}>
						{category.name}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Catagories;
