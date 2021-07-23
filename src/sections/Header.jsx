import { Typography, Box, useTheme, makeStyles } from "@material-ui/core";
import ColorDivider from "../components/ColorDivider";
import React from "react";
import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "100vh",
    width: "100%",
    position: "relative",
    color: "white",
  },
  image: {
    maxHeight: "25vh",
  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    background: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80)`,
    backgroundSize: "cover",
    zIndex: -10,
    filter: "grayscale(0.5) brightness(0.7)",
  },
  text: {
    fontSize: "2rem",
  },
  subtext: {
    fontSize: "1.5rem",
    color: "#c0c0c0",
  },
}));

export default function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.header} id="space">
      <div className={classes.background} />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop="auto"
          marginBottom="auto"
          position="absolute"
          top="25%"
        >
          <Typist>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="h1">
                SPACE{" "}
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ color: "#c0c0c0" }}
                >
                  {"(Noun) "}
                  def.
                </Typography>
              </Typography>
              <Typography variant="h6" component="body1">
                The boundless three-dimensional extent in which objects and
                events have relative position and direction.
              </Typography>
            </Box>
            <ColorDivider />
            <Typist.Delay ms={1000} />
            <Typography variant="h5" className={classes.text}>
              Hi! I'm Do Hyun Nam.
            </Typography>
            {["Computer Science Student.", "Entrepreneur.", "Fun guy."].map(
              (text) => (
                <div>
                  <Typist.Delay ms={500} />
                  <Typography variant="h5" className={classes.subtext}>
                    {text}
                  </Typography>
                </div>
              )
            )}
          </Typist>
        </Box>
      </Box>
    </div>
  );
}
