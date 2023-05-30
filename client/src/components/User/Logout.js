import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearTokens, clearUser } from "../../feature/authSlice";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      await axios.post(
        "http://localhost:3001/auth/logout",
        {
          accessToken,
          refreshToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
            accesstoken: accessToken,
            refreshtoken: refreshToken,
          },
        }
      );

      dispatch(clearTokens());
      dispatch(clearUser());

      navigate("/login");
    } catch (error) {
      if(error.response.status === 401){
        console.log(error.data);
        dispatch(clearTokens());
        dispatch(clearUser());

        navigate("/login");
      }
    }
  };

  return (
    <>
      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="logout"
        type="button"
        onClick={handleLogout}
      >
        <LogoutIcon/>
      </IconButton>
    </>
  );
};

export default Logout;
