import { useSelector } from "react-redux";
import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const Middlebar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Box noValidate sx={{ mt: 1 }} flex flexDirection="row">
      <Paper
        square
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "baseline",
          boxShadow: "none",
          // width: 400,
          flexDirection: "row",
        }}
      >
        {user ? (
          <>
            <Typography variant="subtitle1" color="#666b67" marginTop={1}>
              Hello,
            </Typography>
            <Typography
              variant="h5"
              color="#666b67"
              marginTop={1}
              marginLeft={1}
            >
              {user.firstName}
            </Typography>
          </>
        ) : (
          <Typography component="h4" variant="h4" color="#666b67" marginTop={1}>
            Hello, User
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Middlebar;
