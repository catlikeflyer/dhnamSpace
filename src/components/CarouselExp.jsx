import React from "react";
import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function CarouselExp({
  company,
  jobTitle,
  description,
  time,
  image,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const SliderComponent = ({ company, jobTitle, description, time, image }) => (
    <Box display="flex" flexDirection="row" alignItems="flex-start" style={{backgroundImage: `${image}`}}>
      <Box className={classes.empty} />
      <Box p={2}>
        <Typography variant="h6">
          {jobTitle}, {company} 
        </Typography>
        <Typography variant="body1">
          {time}
        </Typography>
        <Typography paragraph>
          {description}
        </Typography>
      </Box>
    </Box>
  );

  return <div></div>;
}
