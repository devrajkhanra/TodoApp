import React from 'react'
import Logout from '../User/Logout'
import { Box, Divider, IconButton, Paper } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

const RightSidebar = () => {
  return (
    
    <Box
        noValidate
        sx={{ mt: 1 }}
        flex
        flexDirection="row"
      >
        <Paper
          component="form"
          square
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            boxShadow:'none'
            // width: 400,
          }}
        >
          
          <IconButton type="button" sx={{ p: "10px" }} aria-label="settings">
            <SettingsIcon />
          </IconButton>
          
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          
          <Logout/>
        </Paper>
      </Box>
       
  )
}

export default RightSidebar