import {
  AppBar,
  Button,
  Toolbar,
  makeStyles,
  useMediaQuery,
  useTheme,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      maxWidth: 120,
      marginRight: "10px",
    },
    links: {
      marginLeft: "auto",
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    appbarSpace: theme.mixins.toolbar,
  };
});

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.list}
    >
      <List>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          <ListItem button>About Me</ListItem>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          <ListItem button>Projects</ListItem>
        </Link>

        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          <ListItem button>Experience</ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" style={{ background: "rgba(0, 0, 0, 0)" }} elevation={0}>
        <Toolbar>
          {isMobile ? (
            <div className={classes.links}>
              <IconButton
                color="textPrimary"
                className={classes.menuButton}
                edge="start"
                aria-label="right"
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
              >
                {list("right")}
              </SwipeableDrawer>
            </div>
          ) : (
            <div className={classes.links}>
              <Button color="inherit">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  About Me
                </Link>
              </Button>

              <Button color="inherit">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  Projects
                </Link>
              </Button>

              <Button color="inherit">
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  Experience
                </Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
