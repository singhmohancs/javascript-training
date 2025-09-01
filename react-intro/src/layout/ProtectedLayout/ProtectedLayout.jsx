import "./styles.css";

import { Navigate, NavLink, Outlet } from "react-router";
import { useAuth } from "../../hooks";
import { useCart } from "../../hooks/useCart";

export default function ProtectedLayout() {
	const { signOut, isAuthenticated } = useAuth();
	const {cart} = useCart();
	if (!isAuthenticated) return <Navigate to="/auth/login" />;

  const clickCartIconHandler = () => {
    console.log(cart);
  }

	return (
		
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
				<div className="flex flex-row items-center gap-2">	
				<div className="text-primary-500 text-sm border border-gray-300 rounded-full p-2 w-8 h-8 flex items-center justify-center" onClick={clickCartIconHandler}>
					{cart?.length}
				</div>
				<button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded-md">Sign Out</button>
				</div>
				
      </nav>
			</header>
			<main className="appMain min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
			<Outlet />
			</main>
			<footer className="appFooter">
					<p>Footer</p>
				</footer>
			</div>
	);
}