// import React, { useEffect, useState } from "react";

// // 1. Define the type of each user object
// interface User {
//   id: number;
//   name: string;
//     email: string;
//     phone: string;
//   // Add more fields as needed
// }

// const UsersList: React.FC = () => {
//   // 2. Type the users array with `User[]`
//   const [users, setUsers] = useState<User[]>([]);

//   // 3. useEffect to fetch users on mount
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data: User[]) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h2>Users:</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//                 {user.name} ({user.email})
                
//                 {user.phone}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersList;




// import React, { useState, useEffect } from "react";

// const UserList: React.FC = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("useEffect runs after every render");
//   },[]);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//     </div>
//   );
// };

// export default UserList;



import React, { useState, useEffect } from "react";


  
  const person = {
    name: "Tom",
    age: 25,
  };
  

const UserList: React.FC = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    console.log(`Width or Height changed: ${width}x${height}`);
  }, [width, height]);
    
    
  function add(a: number, b: number): number {
    return a  + b;
  }
    
    
  function joinFirstNameAndLastName(firstName: string,lastName: string): void {
       console.log(firstName + " " + lastName) 
      
  }
    
   
  

    


  return (
    <div>
      <button onClick={() => setWidth(width + 10)}>Increase Width</button>
      <br />
          <button onClick={() => setHeight(height + 10)}>Increase Height</button>
          <br />
      
          {person.name }
          {person.age }
          
    </div>
  );
};

export default UserList;

