
import Logout from "../components/User/Logout";
import { Box, Grid,  } from "@mui/material"; 
import LeftSidebar from "../components/Layout/LeftSidebar";
import Middlebar from "../components/Layout/Middlebar";
import RightSidebar from "../components/Layout/RightSidebar";

const Home = () => {
  

  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       const response = await axios.post(`http://localhost:3001/auth/getUser/${user.id}`);

  //       dispatch(setUser(response.data.user));
  //       dispatch(setTokens(response.data.tokens));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (!user) {
  //     getUserDetails();
  //   }
  // }, [user, dispatch]);

  // const handleUpdate = () => {
  //   // Update logic goes here
  // };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} height='100vh'>
        
        <Grid item xs={3} borderRight={1} padding={2}>
        <LeftSidebar/>
        </Grid>
        
        <Grid item xs={6} borderRight={1}>
          <Middlebar/>
        </Grid>
        
        <Grid item xs={3}>
        <RightSidebar/>
        </Grid>
      
      </Grid>
    </Box>
      

      
      
    </>
  );
};

export default Home;
