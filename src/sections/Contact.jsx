import React, { useContext } from "react";
import {
  Box,
  Typography,
  Container,
  makeStyles,
  useTheme,
  IconButton,
  Icon,
} from "@material-ui/core";
import ColorDivider from "../components/ColorDivider";
import { DataContext } from "../context";

export default function Contact() {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: "black",
      width: "100%",
      color: "white",
      minHeight: "100vh",
    },
  }));
  const theme = useTheme();
  const classes = useStyles(theme);
  const { data } = useContext(DataContext);

  return (
    <section id="contact">
      <Box width={1} pt={4} className={classes.container}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Contact Me
          </Typography>
          <ColorDivider />
        </Container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {data.contact.map((soc) => (
            <IconButton aria-label={soc.social}>
              <Icon
                className={soc.icon}
                style={{ fontSize: 40, color: "white", padding: 15 }}
              />
            </IconButton>
          ))}
        </Box>
      </Box>
    </section>
  );
}
