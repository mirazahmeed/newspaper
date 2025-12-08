import React, { createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({
		name: "Alize@gmail.com",
		email: "Alize@gmail.com",
		photoURL: "",
	});
	const authData = {
		user,
		setUser,
	};
	return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
export { AuthContext };
