import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
	return (
		<div>
			<div className="border border-gray-200 p-2">
				<h3 className="font-bold text-xl">Find Us On</h3>
				<div className="flex gap-2 mt-4 flex-col w-full">
					<button className="btn text-xs md:text-sm bg-white border-0 hover:bg-gray-200 rounded-none">
						<FaFacebook size={20} color="blue"/>
						Facebook
					</button>
					<button className="btn text-xs md:text-sm bg-white border-0 hover:bg-gray-200 rounded-none">
						<FaInstagram size={20} color="red"/>
						Instagram
					</button>
					<button className="btn text-xs md:text-sm bg-white border-0 hover:bg-gray-200 rounded-none">
						<FaTwitter size={20} color="blue"/>
						Twitter
					</button>
				</div>
			</div>
		</div>
	);
};

export default FindUs;
