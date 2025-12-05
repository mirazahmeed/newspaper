import React, { use } from "react";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Catagories = () => {
	const categories = use(categoryPromise);
	return <div className="font-bold">All Catagories ({categories.length})</div>;
};

export default Catagories;
