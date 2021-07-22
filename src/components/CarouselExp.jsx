import React from "react";
import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  empty: {
    height: "100%",
    width: "50%",
  },
  box: {
    backgroundColor: "grey",
  },
  textbox: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "100%",
    width: "50%",
  },
}));

const experiences = [
  {
    company: "Saving Tuvalu",
    jobTitle: "Web developer",
    description: "Lorem ipsum dolor sit amet.",
    time: "Jun 2020 ~",
    image: "",
  },
  {
    company: "Saving Tuvalu",
    jobTitle: "Web developer",
    description: "Lorem ipsum dolor sit amet.",
    time: "Jun 2020 ~",
    image: "",
  },
  {
    company: "Saving Tuvalu",
    jobTitle: "Web developer",
    description: "Lorem ipsum dolor sit amet.",
    time: "Jun 2020 ~",
    image: "",
  },
];

export default function CarouselExp() {
  const theme = useTheme();
  const classes = useStyles(theme);

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
        <Typography variant="h6">
          {jobTitle}, {company}
        </Typography>
        <Typography variant="body1">{time}</Typography>
        <Typography paragraph>{description}</Typography>
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
      {experiences.map((exp) => (
        <SliderComponent {...exp} />
      ))}
    </Carousel>
  );
}
