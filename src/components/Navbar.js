import React from "react";
import "../App.css";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import FitbitSharpIcon from "@mui/icons-material/FitbitSharp";
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          maxWidth: 1300,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <FitbitSharpIcon></FitbitSharpIcon>
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          PortFolio
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button variant="text" color="inherit">
            About
          </Button>
          <Button variant="text" color="inherit">
            Skills
          </Button>
          <Button variant="text" color="inherit">
            Experience
          </Button>
          <Button variant="text" color="inherit">
            Projects
          </Button>
          <Button variant="text" color="inherit">
            Education
          </Button>
        </Stack>
        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          alignItems="flex-end"
          justify="flex-end"
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{ marginLeft: "auto" }}
          >
            Github
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
