import { Outlet } from "react-router";
import { UserList } from "./components";

export default function ManageUserPage() {
	return (
		<div className="flex">
			<div className="flex-1 p-4">
				<h1>User Management</h1>
				<UserList />
			</div>
			<aside className="w-[400px] bg-gray-100 p-4 border-l">
				<Outlet /> {/* Shows Create, View, or Update */}
			</aside>
		</div>
	)
}