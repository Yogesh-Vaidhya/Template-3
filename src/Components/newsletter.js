import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./newsletterCss.js";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(styles);

const Newsletter2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.divContainer}>
      <Typography className={classes.mainHead}>
        Stay updated with the latest news!
      </Typography>
      <Grid
        container
        className={classes.gridContainer}
        justifyContent="center"
        spacing={0}
      >
        <Grid item xs={3} className={classes.gridLeft}>
        <TextField
            id="filled-full-width"
            label="Name"
            placeholder="Simran"
            height="156"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className={classes.text}
          />
        </Grid>
        <Grid item xs={3} className={classes.gridMid}>
        <TextField
            id="filled-full-width"
            label="Email Address"
            placeholder="simran@example.com"
            height="156"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className={classes.text}
          />
        </Grid>
        <Grid item xs={3} className={classes.gridRight}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Newsletter2;
