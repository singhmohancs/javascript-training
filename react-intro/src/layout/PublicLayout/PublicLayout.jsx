import "./styles.css";

import { NavLink, Outlet } from "react-router";

export default function PublicLayout() {
	return (
		<>
		<div className="appContainer">
		<header className="appHeader">
			<nav className="appNav">
        <ul>
          <li>
            <NavLink to="/">Manage Users</NavLink>
          </li>
          <li>
            <NavLink to="/manage-product">Manage Products</NavLink>
          </li>
          <li>
            <NavLink to="/manage-brand">Manage Brands</NavLink>
          </li>
          <li>
            <NavLink to="/manage-order">Manage Orders</NavLink>
          </li>
        </ul>
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