import { Box, Container, makeStyles, useTheme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100vw",
    height: "100vh",
    background: `url(https://images.unsplash.com/photo-1584907797015-7554cd315667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80)`,
  },
}));

export default function Background() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <Container className={classes.header}></Container>;
}
