import {
  Box,
  Container,
  Typography,
  makeStyles,
  useTheme,
  Grid,
  Divider,
} from "@material-ui/core";
import React from "react";
import Typist from "react-typist";
import ColorDivider from "../components/ColorDivider";
import ib from "../img/ib.png";
import myImage from "../img/stickerlogo.png";
import tec from "../img/tec.png";
import AboutItemCard from "../components/AboutItemCard";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage:
      "linear-gradient(rgba(20, 20, 20, 0), rgba(10, 10, 10, 0.8))",
    width: "100%",
    color: "white",
    minHeight: "100vh",
  },
  image: {
    maxWidth: "100%",
  },
  text: {
    color: "white",
    marginLeft: 2,
  },
}));

const aboutItems = [
  {
    title: "International Baccalaureate",
    desc: "International Baccalaureate alumni, graduated from the bilingual diploma programme.",
    image: ib,
  },
  {
    title: "B.Sc. Computer Science",
    desc: "Aspiring computer scientist studying in Mexico at Monterrey Institute of Technology.",
    image: tec,
  },
];

export default function About() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <section id="about">
      <Box width={1} pt={4} className={classes.container}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            style={{ fontFamily: "Megrim" }}
            gutterBottom
          >
            About Me
          </Typography>
          <ColorDivider />
          <Grid container>
            <Grid
              item
              xs={12}
              md={5}
              lg={3}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={myImage} alt="me" className={classes.image} />
            </Grid>
            <Grid item md={2} xs={0} lg={2}>
              {"  "}
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              lg={7}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typist>
                <Typography variant="h6" fontWeight="light" className={classes}>
                  If a word describes me, it'll be curiosity. It drives people
                  everywhere, from the park in the neighborhood all the way up
                  to Mars (well, soon enough).
                  <br /> <br />
                  As a Korean living in Mexico I had tons of opportunities to
                  live and learn from both cultures, which sparked my love to
                  meet and connect with people all around the world.
                  <br /> <br />
                </Typography>
              </Typist>
              <Divider />
              <Grid container>
                {aboutItems.map((item) => (
                  <Grid item xs={12}>
                    <AboutItemCard {...item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
