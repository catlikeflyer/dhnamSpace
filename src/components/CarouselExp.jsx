import React from "react";
import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { useContext } from "react";
import { DataContext } from "../context";

const useStyles = makeStyles((theme) => ({
  empty: {
    height: "100%",
    width: "50%",
  },
  box: {
    backgroundColor: "grey",
    borderRadius: 10
  },
  textbox: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "100%",
    width: "50%",
  },
}));

export default function CarouselExp() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { data } = useContext(DataContext);

  const SliderComponent = ({ company, jobTitle, description, time, image }) => (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      style={{ backgroundImage: `${image}` }}
      className={classes.box}
    >
      <Box className={classes.empty} />
      <Box p={2} className={classes.textbox}>
        <Typography variant="h6" gutterBottom>
          {jobTitle}, {company}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: "#c0c0c0" }}>
          {time}
        </Typography>
        <Typography paragraph gutterBottom>
          {description}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Carousel
      NextIcon={<ArrowRight />}
      PrevIcon={<ArrowLeft />}
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {data.experiences.map((exp) => (
        <SliderComponent {...exp} />
      ))}
    </Carousel>
  );
}
