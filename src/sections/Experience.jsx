import CarouselExp from "../components/CarouselExp";
import React, { useContext, useEffect } from "react";
import ColorDivider from "../components/ColorDivider";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import {
} from "@material-ui/icons";
import { loadCSS } from "fg-loadcss";
import { DataContext } from "../context";
import MeCard from "../components/MeCard";
import Spacer from "../components/Spacer";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.8), rgba(0, 0, 0))",
    width: "100%",
    color: "white",
    minHeight: "100vh",
  },
}));

export default function Experience() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const {data} = useContext(DataContext)

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <section id="experience">
      <Box width={1} pt={4} pb={8} className={classes.container}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Experience
          </Typography>
          <ColorDivider />
          <CarouselExp />
          <Spacer height={50} />
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" align="center" gutterBottom>
                Hobbies
              </Typography>
              <ColorDivider width="5vw"></ColorDivider>
              <Grid container>
                {data.hobbies.map((hob) => (
                  <Grid item xs={12} md={6}>
                    <Box p={1}>
                      <MeCard {...hob} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" align="center" gutterBottom>
                Skills
              </Typography>
              <ColorDivider width="5vw"></ColorDivider>
              <Grid container>
                {data.skills.map((skill) => (
                  <Grid item xs={12} md={6}>
                    <Box p={1}>
                      <MeCard {...skill} />
                    </Box>
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
