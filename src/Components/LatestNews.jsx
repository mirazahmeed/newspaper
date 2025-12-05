import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
	return (
		<div className="flex gap-2 items-center bg-base-200 p-2 mt-2">
			<p className="text-base-100 bg-secondary px-3 py-1">Latest</p>
			<Marquee className="flex gap-10" pauseOnHover={true} speed={50}>
				<p className="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quaerat ullam ea perferendis ratione architecto iure ab.
				</p>
				<p className="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quaerat ullam ea perferendis ratione architecto iure ab.
				</p>
				<p className="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quaerat ullam ea perferendis ratione architecto iure ab.
				</p>
			</Marquee>
		</div>
	);
};

export default LatestNews;
