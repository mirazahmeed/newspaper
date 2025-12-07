import React from "react";
import swimimgImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";
const QZone = () => {
	return (
		<div>
			<h3 className="font-bold text-xl">Q Zone</h3>
			<div className="border border-gray-200 p-2">
				<div className="flex gap-2 mt-4 flex-col w-full">
					<img src={swimimgImg} alt="" />
					<img src={classImg} alt="" />
					<img src={playgroundImg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default QZone;
