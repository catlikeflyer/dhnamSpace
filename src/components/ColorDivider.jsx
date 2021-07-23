import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  divider: {
    height: 5,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 20,
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBotton: 10,
  },
});

export default function ColorDivider({ color = "white", width = "10vh" }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <div
        className={classes.divider}
        style={{ backgroundColor: color, width: width }}
      />
    </Box>
  );
}
