import CarouselExp from "../components/CarouselExp"
import React, {useEffect, useContext} from "react";
import ColorDivider from "../components/ColorDivider";
import {
  Grid,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Box,
  Container,
  Typography,
  makeStyles,
  useTheme,
  Icon,
} from "@material-ui/core";
import {
  ImportContacts,
  NaturePeople,
  SupervisedUserCircle,
} from "@material-ui/icons";
import { loadCSS } from "fg-loadcss";
import { orange, yellow, blue } from "@material-ui/core/colors";
import { DataContext } from "../context";

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
      <Box width={1} pt={4} className={classes.container}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
          >
            Experience
          </Typography>
          <ColorDivider />
          <CarouselExp />
          <div>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SupervisedUserCircle color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Open Minded" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <NaturePeople color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Leadership" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ImportContacts color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Lifelong learning" />
              </ListItem>
            </List>
          </div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {[
              { icon: "fab fa-html5", title: "HTML5", color: orange[500] },
              {
                icon: "fab fa-js-square",
                title: "JavaScript",
                color: yellow[400],
              },
              { icon: "fab fa-css3-alt", title: "CSS3", color: blue[500] },
              { icon: "fab fa-react", title: "React", color: blue[300] },
              { icon: "fab fa-python", title: "Python", color: yellow[300] },
            ].map((item) => (
              <Grid item md={4} sm={6}>
                <Box
                  pt={3}
                  pb={3}
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon
                    className={item.icon}
                    style={{ fontSize: 100, color: `${item.color}` }}
                  />
                  <Typography variant="h6" className={classes.text}>
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
