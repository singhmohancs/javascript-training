import { AppHeader, AppFooter } from "./components";
import { Outlet } from "react-router";

export default function AppLayout() {
	return (
		<div className="app-layout flex flex-col gap-4 min-h-screen">
			<AppHeader />
			<main className="flex-1 p-4 bg-amber-100 rounded-lg">	
				<Outlet />
			</main>
			<AppFooter />
		</div>
	);
}