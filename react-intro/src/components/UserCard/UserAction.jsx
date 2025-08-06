import { NavLink } from 'react-router';
import Button from '../Button';

export default function UserAction(props) {
	const user = props.user;
	const userId = user.id;
	// const onDelete = props.onDelete;

 const handleDelete = (userId, event, name) => {
	console.log('delete', userId, event, name);
 }


  return (
		<div className="flex flex-row gap-2 justify-end items-center">	
		<NavLink to={`/users/${userId}`}>View</NavLink>
		<NavLink to={`/users/${userId}/update`}>Edit</NavLink>
		<div>
			{/* <Button onClick={function(event){
			handleDelete(userId, event)
			}}>Delete</Button>  */}
			{/* pass additional argument to the function using arrow function/arrow notation */}

			{/* <Button onClick={(event)=> {
			handleDelete(userId, event)
			}}>Delete</Button> */}

			<Button onClick={(event)=>handleDelete(userId, event, user.name)}>Delete</Button>
		</div>
		</div>
  )
}
