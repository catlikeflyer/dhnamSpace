import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ModalProject from "./ModalProject";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    backgroundColor: "rgba(55, 55, 55, 0.85)",
    color: "white"
  },
  media: {
    height: 200,
  },
});

export default function ProjectsCard({title, thumbnail, info, demolink}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={thumbnail}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p" style={{color: "#dddddd"}}>
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={demolink}>
          Live demo
        </Button>
        <ModalProject data={info} title={title} />
      </CardActions>
    </Card>
  );
}
