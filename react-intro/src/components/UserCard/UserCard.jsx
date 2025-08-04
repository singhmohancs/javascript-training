import './style.css';
import UserAction from './UserAction';

export default function UserCard(props) {
	const user = props.user;
	//const navigate = useNavigate(); // hook to navigate to a different page

	const handleDelete = (userId) => {
		console.log('delete', userId);
		console.log(user);
	}

	return (
		<div className="card flex flex-row justify-between">
		<div>
		<p>ID: {user.id}</p>
		<p>Name: {user.name}</p>
		<p>Age: {user.age}</p>
		<p>City: {user.city}</p>
		<p>Country: {user.country}</p>
		<p>Email: {user.email}</p>
		<p>Phone: {user.phone}</p>
		<p>Address: {user.address}</p>
		<p>Zip: {user.zip}</p>

		</div>
		<UserAction user={user} onDelete={handleDelete} />
		</div>
	);
}