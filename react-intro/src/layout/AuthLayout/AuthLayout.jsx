import { Navigate, Outlet } from "react-router";
import eiffelTower from "../../assets/eiffel-tower.jpg";
import authStyles from "./auth.module.css";
import { useAuth } from "../../hooks";

export default function AuthLayout() {
	const { isAuthenticated } = useAuth();
	if (isAuthenticated) return <Navigate to="/" />;

	return (
		<>
		<div className={`${authStyles['authPage']}`}>
		<div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<img src={eiffelTower} alt="logo" className="h-full w-full object-cover" />
		</div>
			<div className="w-full">	
				<Outlet />
				</div>
			</div>
		</>
	);
}