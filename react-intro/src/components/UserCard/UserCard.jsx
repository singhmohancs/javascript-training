import './style.css';

export default function UserCard(props) {
	const user = props.user;
	
	return (
		<div className="card">
		<p>Name: {user.name}</p>
		<p>Age: {user.age}</p>
		<p>City: {user.city}</p>
		<p>Country: {user.country}</p>
		<p>Email: {user.email}</p>
		<p>Phone: {user.phone}</p>
		<p>Address: {user.address}</p>
		<p>Zip: {user.zip}</p>
		</div>
	);
}