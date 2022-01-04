import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "40px !important",
    fontFamily: "Montserrat",
  },
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max) !important`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
}));

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          cum.
        </Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos
          rem soluta ea saepe ipsa cum dolor natus, error odio quia quis enim
          nulla itaque id possimus quibusdam debitis! Minus.
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="text" className={classes.btn}>
          Read More...
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
