import React from "react";
import {
  Box,
  Button,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { useContext } from "react";
import { DataContext } from "../context";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  empty: {
    height: "100%",
    width: "50%",
  },
  box: {
    backgroundColor: "grey",
    borderRadius: 10,
    minHeight: 500,
    backgroundPosition: "center",
    backgroundAttachment: "contain",
  },
  textbox: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    minHeight: 500,
    width: "50%",
  },
}));

export default function CarouselExp() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { useFirestore } = useContext(DataContext);

  const { docs } = useFirestore("experiences");

  const SliderComponent = ({ title, jobTitle, desc, date, imageUrl, link }) => (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={classes.box}
    >
      <Box className={classes.empty} />
      <Box p={2} className={classes.textbox}>
        <Typography variant="h6" gutterBottom>
          {title} - {jobTitle}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: "#c0c0c0" }}>
          {date}
        </Typography>
        <Typography paragraph gutterBottom style={{ fontSize: 18 }}>
          {desc}
        </Typography>
        {link && (
          <a href={link} target="blank" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Visit Website
            </Button>
          </a>
        )}
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
      {docs.map((exp) => (
        <SliderComponent {...exp} />
      ))}
    </Carousel>
  );
}
