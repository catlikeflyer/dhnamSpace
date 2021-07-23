import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(55, 55, 55, 0.85)",
    color: "white",
    borderRadius: 10,
  },
  image: {
    padding: 10,
    margin: 10,
    maxWidth: "10%"
  },
}));

export default function AboutItemCard({ title, image, desc }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      m={1}
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      className={classes.root}
      justifyContent="center"
    >
      <img src={image} alt={title} className={classes.image} />
      <Box display="flex" flexDirection="column" alignItems="flex-start" pt={1} pb={1} pr={1}>
        <Typography variant="h6">{title}</Typography>
        <Typography paragraph style={{ color: "#dddddd" }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
