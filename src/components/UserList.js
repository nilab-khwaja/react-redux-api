import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/users/usersSlice';

const UserList = () => {
    const dispatch = useDispatch();
    const {users,isLoading,error} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);
    
    
  return (
    <div>
      {/* Add loading state JSX content */}
      {isLoading && <p>Loading...</p>}
      
      {/* Add error state JSX content */}
      {error && <p>Error: {error}</p>}
      
      {/* Add default state that maps over users */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name.first} 
            {user.name.last}
          </li>
        ))}
      </ul>
    </div>

  )
}

export default UserList