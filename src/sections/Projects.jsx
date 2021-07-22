import {
  Box,
  Container,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import React from "react";
import ColorDivider from "../components/ColorDivider";
import Masonry from "react-masonry-css";
import ProjectsCard from "../components/ProjectCard";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "rgba(10, 10, 10, 0.8)",
    width: "100%",
    color: "white",
    minHeight: "100vh",
  },
}));

const projects = [
  {
    title: "Pokedex",
    info: "Lorem ipsum dolor sit amet.",
    demolink: "https://instagram.com/catlikeflyer",
    thumbnail:
      "https://images.unsplash.com/photo-1584907797015-7554cd315667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
  },
  {
    title: "Pokedex",
    info: "Lorem ipsum dolor sit amet.",
    demolink: "https://instagram.com/catlikeflyer",
    thumbnail:
      "https://images.unsplash.com/photo-1584907797015-7554cd315667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
  },
  {
    title: "Pokedex",
    info: "Lorem ipsum dolor sit amet.",
    demolink: "https://instagram.com/catlikeflyer",
    thumbnail:
      "https://images.unsplash.com/photo-1584907797015-7554cd315667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
  },
  {
    title: "Pokedex",
    info: "Lorem ipsum dolor sit amet.",
    demolink: "https://instagram.com/catlikeflyer",
    thumbnail:
      "https://images.unsplash.com/photo-1584907797015-7554cd315667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
  },
  {
    title: "Pokedex",
    data: "Lorem ipsum dolor sit amet.",
    demolink: "https://instagram.com/catlikeflyer",
    thumbnail:
      "https://images.unsplash.com/photo-1584907797015-7554cd315667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80)",
  },
];

export default function Projects() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section id="projects">
      <Box width={1} pt={4} className={classes.container}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            style={{ fontFamily: "Megrim" }}
            gutterBottom
          >
            Projects
          </Typography>
          <ColorDivider />
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {projects.map((project) => (
              <ProjectsCard {...project} />
            ))}
          </Masonry>
        </Container>
      </Box>
    </section>
  );
}
