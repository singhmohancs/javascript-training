import { useAuth } from "../../hooks";

export default function ManageProductPage() {
	const { user } = useAuth();
	return <div>ManageProductPage {user?.name} - {user?.id}</div>;
}