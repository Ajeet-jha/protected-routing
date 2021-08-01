import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector(
    state => state.user.users
  );

  return (
    <div>
      <h3>Users</h3>
      {users &&
        users.map((item, index) => (
          <div key={index}>
            <hr />
            <h4>{item.name}</h4>
            <p> Phone: {item.phone}</p>
            <p> Website: {item.website}</p>
          </div>
        ))}
    </div>
  );
}

export default Users;