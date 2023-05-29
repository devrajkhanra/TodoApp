import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputBase,
  Link,
  Paper,
  TextField,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';


const LeftSidebar = () => {
  return (
    <>
      <Box
        component="form"
        onSubmit=""
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
            // width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
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
    </>
  );
};

export default LeftSidebar;
