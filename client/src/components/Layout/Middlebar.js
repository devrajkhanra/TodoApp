import { useSelector } from "react-redux";
import React from "react";
import { Typography } from "@mui/material";

const Middlebar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      {user ? (
        <Typography component="h1" variant="h5">
          Hello, {user.firstName}
        </Typography>
      ) : (
        <Typography component="h1" variant="h5">
          Hello, User
        </Typography>
      )}
    </>
  );
};

export default Middlebar;
