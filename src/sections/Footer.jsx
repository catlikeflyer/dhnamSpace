import { Box, BottomNavigation } from "@material-ui/core";
import React from "react";

export default function Footer() {
  return (
    <BottomNavigation style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", top: 100, color: "white"}}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <span>
          Made with <i class="fa fa-heart pulse"></i> by DHNAM
        </span>
      </Box>
    </BottomNavigation>
  );
}
