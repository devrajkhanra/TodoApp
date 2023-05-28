import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearTokens, clearUser } from "../../feature/authSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      await axios.post(
        "http://localhost:3001/auth/logout",{
          accessToken,
          refreshToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "accesstoken": accessToken,
            "refreshtoken": refreshToken,
          },
        }
      );

      dispatch(clearTokens());
      dispatch(clearUser());

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
