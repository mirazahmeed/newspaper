import React, { Suspense } from "react";
import Catagories from "../Catagories";

const LeftAside = () => {
	return (
		<div>
			<Suspense
				fallback={
					<div>
						<span className="loading loading-ring loading-md"></span>
						<span className="loading loading-ring loading-lg"></span>
					</div>
				}>
				<Catagories></Catagories>
			</Suspense>
		</div>
	);
};

export default LeftAside;
