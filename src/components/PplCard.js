import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 140 },
});
export default function PplCard({ email, firstname, lastname, avatar }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={avatar} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {firstname + " " + lastname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            {email}
          </Typography>{" "}
        </CardContent>{" "}
      </CardActionArea>
      <CardActions>
        <Button href={avatar} size="small" color="primary">
          Thumbnail Pic{" "}
        </Button>{" "}
      </CardActions>
    </Card>
  );
}
