import React from "react";
import Header from "./landing/Header";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const Layout = () => {
    return (
      <Grid sx={{display:"flex",rowGap:"5px",flexDirection:"column",height:"100vh"}}>
        <Box sx={{width:"100vw",}}>
         <Header/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",height:"100%",padding:"0px 5px"}}>
          <Box sx={{flexGrow:1,marginLeft:"5px",borderRadius:"5px"}}>
            <Outlet/>
          </Box>
        </Box>
      </Grid>
    );
  };
  
  export default Layout;