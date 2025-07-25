import { UserCard, Button } from "../../../../components"
import { useNavigate } from "react-router"

export default function UserList() {
  const navigate = useNavigate();

	  const users = [
    {name: "Shivali", age: 20, city: "Delhi", country: "India", email: "shivali@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
    {name: "Mohan", age: 20, city: "Delhi", country: "India", email: "mohan@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
    {name: "Rajesh", age: 20, city: "Delhi", country: "India", email: "rajesh@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
    {name: "Suresh", age: 20, city: "Delhi", country: "India", email: "suresh@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
    {name: "Rajesh", age: 20, city: "Delhi", country: "India", email: "rajesh@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
  ]
  function clickHandler() {
    navigate("/create-user");
  }
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold underline text-amber-500" style={{color: "red"}}>Users</h1>
        <Button 
        variant="primary" 
         loading={false}  
          onClick={clickHandler}>Add new User</Button>
        {/* <Link to="/create-user">
          <Button variant="primary" loading={false}>Add new User</Button>
        </Link> */}
      </div>
      
      {users.map((user, index) => {
        return (
          <UserCard user={user} key={`user-${index}`}/>
        )
      })}
      
    </>
  )

}