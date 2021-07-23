import { Icon, makeStyles, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    backgroundColor: "rgba(55, 55, 55, 0.85)",
    color: "white",
  },
});

export default function MeCard({ icon, text, color }) {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      className={classes.root}
      justifyContent="center"
      p={1}
    >
      <Icon className={icon} style={{ fontSize: 100, color: `${color}` }} />
      <Typography variant="h6" className={classes.text}>
        {text}
      </Typography>
    </Box>
  );
}
