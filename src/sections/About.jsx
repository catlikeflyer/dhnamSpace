import {
  Box,
  Container,
  Typography,
  makeStyles,
  useTheme,
  Grid,
  Divider,
} from "@material-ui/core";
import React, { useContext } from "react";
import ColorDivider from "../components/ColorDivider";
import myImage from "../img/stickerlogo.png";
import AboutItemCard from "../components/AboutItemCard";
import { DataContext } from "../context";
import MeCard from "../components/MeCard";
import Spacer from "../components/Spacer";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage:
      "linear-gradient(rgba(20, 20, 20, 0), rgba(10, 10, 10, 0.8))",
    width: "100%",
    color: "white",
    minHeight: "100vh",
  },
  image: {
    width: "25%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    color: "white",
    marginLeft: 2,
    fontSize: 16,
  },
}));

export default function About() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { data } = useContext(DataContext);

  return (
    <section id="about">
      <Box width={1} pt={4} className={classes.container}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            About Me
          </Typography>
          <ColorDivider />
          <Grid container>
            <Grid
              item
              xs={12}
              md={5}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography paragraph fontWeight="light" className={classes.text}>
                <em>
                  If a word describes me, it'll be curiosity. It drives people
                  everywhere, from the park in the neighborhood all the way up
                  to Mars (well, soon enough).
                </em>
                <br /> <br />
                I was born in Korea and lived there until 2004 (I was 2! So I
                really don't remember anything) when my family moved down to
                Mexico. While growing up, I was (and still am) a big fan of new
                tech, cars & planes, sports, and Pokemon. Each one of them has
                helped me into shaping and learning more about myself, to form
                an identity.
                <br /> <br />
                My inspiration to study CS came from a docuseries about
                professor Dennis Hong, a Korean-American robotics engineer,
                which opened my eyes into dedicating my life and work into
                robots and technology to help people.
                <br /> <br />
                As a Korean living in Mexico I had tons of opportunities to live
                and learn from both cultures, which sparked my love to meet and
                connect with people all around the world. Traveling and learning
                are main mottos as I go on this journey called life.
                <br /> <br />
              </Typography>
            </Grid>
            <Grid item xs={0} md={1}>
              {" "}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Divider />
              <Grid container>
                {data.aboutItems.map((item) => (
                  <Grid item xs={12}>
                    <AboutItemCard {...item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Box display="flex" width="100%" alignItems="center">
              <img src={myImage} alt="me" className={classes.image} />
            </Box>
          </Grid>
          <Spacer height={50} />
          <Typography variant="h4" gutterBottom align="center">
            Aptitudes
          </Typography>
          <ColorDivider width="5vw" />
          <Grid container justifyContent="center">
            {data.aptitudes.map((ap) => (
              <Grid item xs={12} md={4} lg={3}>
                <Box p={1}>
                  <MeCard {...ap} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Spacer />
      </Box>
    </section>
  );
}
