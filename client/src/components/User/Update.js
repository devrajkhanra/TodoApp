import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTokens } from '../../feature/authSlice';

const Update = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearTokens());
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Update;
