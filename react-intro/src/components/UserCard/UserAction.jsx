import { NavLink } from 'react-router';
import Button from '../Button';

export default function UserAction(props) {
	const user = props.user;
	const userId = user.id;
	const onDelete = props.onDelete;

  return (
		<div className="flex flex-row gap-2 justify-end items-center">	
		<NavLink to={`/users/${userId}`}>View</NavLink>
		<NavLink to={`/users/${userId}/update`}>Edit</NavLink>
		<div>
			<Button onClick={() => {
				onDelete(userId);
			}}>Delete</Button>
		</div>
		</div>
  )
}
