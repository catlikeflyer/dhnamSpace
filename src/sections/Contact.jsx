import React, { useContext } from "react";
import {
  Box,
  Typography,
  Container,
  makeStyles,
  useTheme,
  IconButton,
  Icon,
  Button,
} from "@material-ui/core";
import ColorDivider from "../components/ColorDivider";
import { DataContext } from "../context";
import { blueGrey } from "@material-ui/core/colors";

export default function Contact() {
  const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      color: "white",
      minHeight: "100vh",
    },
    button: {
      "&:hover": {
        color: "grey",
      },
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  }));
  const theme = useTheme();
  const classes = useStyles(theme);
  const { data } = useContext(DataContext);
  const blueGray = blueGrey[500]

  return (
    <section id="contact">
      <Box width={1} pt={4} className={classes.container}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Contact Me
          </Typography>
          <ColorDivider />
        </Container>
        <Typography paragraph align="center" component="h3">
          Follow me on my social media accounts or send me an{" "}
          <a href="mailto: dhnam@aol.com" style={{ color: "aliceblue" }}>
            email
          </a>
          !
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {data.contact.map((soc) => (
            <IconButton
              aria-label={soc.social}
              className={classes.button}
              color="inherit"
            >
              <a href={soc.link} target="blank" className={classes.link}>
                <Icon
                  className={soc.icon}
                  style={{
                    fontSize: 40,
                    padding: 15,
                  }}
                />
              </a>
            </IconButton>
          ))}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color={blueGray}
            className={classes.button}
            endIcon={<Icon className="fas fa-file-download" />}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </section>
  );
}
