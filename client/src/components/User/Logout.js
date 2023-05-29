import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearTokens, clearUser } from "../../feature/authSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

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
    <>
      <Button variant="outlined" onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default Logout;
