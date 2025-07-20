import UserCard from "../../../../components/user/UserCard"

export default function UserList() {

	  const users = [
    {name: "Shivali", age: 20, city: "Delhi", country: "India", email: "shivali@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
    {name: "Mohan", age: 20, city: "Delhi", country: "India", email: "mohan@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
    {name: "Rajesh", age: 20, city: "Delhi", country: "India", email: "rajesh@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
    {name: "Suresh", age: 20, city: "Delhi", country: "India", email: "suresh@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
    {name: "Rajesh", age: 20, city: "Delhi", country: "India", email: "rajesh@gmail.com", phone: "9876543210", address: "123, Main Street, New York", zip: 12345},
  ]
  return (
    <>
      
      <h1>Users</h1>
      {users.map((user, index) => {
        return (
          <UserCard user={user} key={`user-${index}`}/>
        )
      })}
      
    </>
  )

}