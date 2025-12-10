import React, { use } from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import { AuthContext } from "../../provider/AuthProvider";

const RightAside = () => {
	const { user } = use(AuthContext);
	return (
		<div className="flex flex-col gap-4">
			{user ? null : <SocialLogin />}
			<FindUs />
			<QZone />
		</div>
	);
};

export default RightAside;
