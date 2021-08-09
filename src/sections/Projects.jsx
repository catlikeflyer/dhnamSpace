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
import { useContext } from "react";
import { DataContext } from "../context";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.8), rgba(0, 0, 0))",
    width: "100%",
    color: "white",
    minHeight: "100vh",
  },
}));

export default function Projects() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { useFirestore } = useContext(DataContext);
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  const { docs } = useFirestore("projects");

  return (
    <section id="projects">
      <Box width={1} pt={4} className={classes.container}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Projects
          </Typography>
          <ColorDivider />
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {docs && docs.map((project) => <ProjectsCard {...project} key={project.id}/>)}
          </Masonry>
        </Container>
      </Box>
    </section>
  );
}
