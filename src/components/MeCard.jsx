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
      justifyContent="flex-start"
      p={1}
    >
      <Box m={1}>
        <Icon
          style={{ fontSize: 40, color: color, paddingRight: 25 }}
        />
      </Box>
      <Typography
        variant="h6"
        style={{ justifySelf: "flex-end" }}
      >
        {text}
      </Typography>
    </Box>
  );
}
