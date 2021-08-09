import { Container, Box } from "@material-ui/core";
import React from "react";

export default function Footer() {
  return (
    <Container style={{ backgroundColor: "#a0a0a0", width: "100vw" }}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <span>
          Made with <i class="fa fa-heart pulse"></i> by DHNAM
        </span>
      </Box>
    </Container>
  );
}
