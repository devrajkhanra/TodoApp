import React from 'react'
import Logout from '../User/Logout'
import { Box } from '@mui/material'

const RightSidebar = () => {
  return (
    <>
    <Box
        component="form"
        onSubmit=""
        noValidate
        sx={{ mt: 1 }}
        flex
        flexDirection="row"
        square
      >
         <Logout/>
      </Box>
       
    </>
  )
}

export default RightSidebar