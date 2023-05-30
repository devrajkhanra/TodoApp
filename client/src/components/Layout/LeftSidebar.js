import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';


const LeftSidebar = () => {
  return (
    
      <Box
        noValidate
        sx={{ mt: 1 }}
        flex
        flexDirection="row"
        // boxShadow={"none"}
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
          <InputBase
            sx={{ ml: 1, flex: 1, borderBottom: 1, borderBottomColor: '#e3e6e4'}}
            placeholder="Add a Todo Group"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <AddIcon />
          </IconButton>
        </Paper>
      </Box>
    
  );
};

export default LeftSidebar;
