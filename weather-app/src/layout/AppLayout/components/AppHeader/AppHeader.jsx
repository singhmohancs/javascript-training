import { NavLink } from "react-router";
import logo from "../../../../assets/react.svg";

export default function AppHeader() {
	return (
		<nav className="bg-gray-300 shadow-2xl rounded-lg text-white p-2 flex justify-between items-center gap-4">
			<div className="flex gap-4">
				<img src={logo} alt="logo" className="w-10 h-10" />
			</div>

			<div className="flex gap-4">
				<NavLink to="/" className="text-black">Home</NavLink>
				<NavLink to="/weather" className="text-black">Weather</NavLink>
			</div>
		</nav>
	);
}
