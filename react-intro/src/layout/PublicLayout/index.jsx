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
			<main className="appMain">
			<Outlet />
			</main>
			<footer className="appFooter">
					<p>Footer</p>
				</footer>
			</div>
		</>
	);
}