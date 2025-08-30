import { useEffect, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export { AuthContext };

export default function AuthProvider({children}) {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const signIn = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
		setIsAuthenticated(true);
	}
	const signOut = () => {
		setUser(null);
		localStorage.removeItem("user");
		setIsAuthenticated(false);
	}
	const value = {
		user,
		signIn,
		signOut,
		isAuthenticated,
	}

	useEffect(() => {
		try {
			const user = localStorage.getItem("user");
			if (user) setUser(JSON.parse(user));
			else setUser(null);
			setIsAuthenticated(!!user);
		} catch (error) {
			console.error("Error loading user from localStorage:", error);
			setUser(null);
			setIsAuthenticated(false);
		} finally {
			setIsLoading(false);	
		}
	}, []);

	if (isLoading) return <div>Loading...</div>;

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
