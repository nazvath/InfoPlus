import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'; 

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container3">
      <h1 className='user1'>User List</h1>
      <ul className='ul1'>
        {users.map(user => (
          <li className='li1' key={user.id}>
            <span className='label'>Name:</span> {user.name} <br />
            <span className='label'>Username:</span> {user.username} <br />
            <span className='label'>Email:</span> {user.email} <br />
            <span className='label'>Phone:</span>{user.phone} <br />
            <span className='label'>Website</span>{user.website} <br />
            <span className='label'>Company Name:</span> {user.company.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
