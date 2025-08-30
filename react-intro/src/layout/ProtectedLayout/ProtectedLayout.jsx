import "./styles.css";

import { Link, Navigate, NavLink, Outlet } from "react-router";
import { useAuth } from "../../hooks";

export default function ProtectedLayout() {
	const { signOut, isAuthenticated } = useAuth();
	if (!isAuthenticated) return <Navigate to="/auth/login" />;

	return (
		<>
		<div className="appContainer">
		<header className="appHeader">
			<nav className="appNav">
        <ul>
          <li>
            <NavLink to="/users">Manage Users</NavLink>
          </li>
          <li>
            <NavLink to="/products">Manage Products</NavLink>
          </li>
          <li>
            <NavLink to="/brands">Manage Brands</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Manage Orders</NavLink>
          </li>
        </ul>
				<button onClick={() => signOut()}>Sign Out</button>
      </nav>
			</header>
			<main className="appMain min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
			<Outlet />
			</main>
			<footer className="appFooter">
					<p>Footer</p>
				</footer>
			</div>
		</>
	);
}