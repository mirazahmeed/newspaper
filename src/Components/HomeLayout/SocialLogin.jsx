import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
	return (
		<div className="border border-gray-200 p-2">
			<h3 className="font-bold">Login With</h3>
			<div className="flex gap-2 mt-4 flex-col w-full">
				<button className="btn btn-secondary btn-outline text-xs md:text-sm hover:bg-gray-200 hover:border-blue-400 hover:text-blue-400">
					<FcGoogle size={20} />
					Login With Google
				</button>
				<button className="btn btn-primary btn-outline text-xs md:text-sm hover:bg-gray-200 hover:border-blue-400 hover:text-blue-400">
					<FaGithub size={20} />
					Login With Github
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
