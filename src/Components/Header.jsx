import React from "react";
import "../index.css";
import { format } from "date-fns";

const Header = () => {
	return (
		<div className="flex justify-center flex-col items-center gap-2 mt-5">
			<h1 className="header-font text-3xl md:text-5xl lg:text-6xl">
				The Daily Chronicle
			</h1>
			<p className="text-accent">Journalism Without Fear or Favour</p>
			{/* <p>{new Date().toLocaleDateString()}</p> */}
			<p className="text-accent">{format(new Date(), "PPPP")}</p>
		</div>
	);
};

export default Header;
