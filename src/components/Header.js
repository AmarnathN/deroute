import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Search, Sort as SortIcon, ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Concert One",
  },
  appBar: {
    background: "none",
    fontSize: "2rem",
    color: "white",
    fontFamily: "Concert One",
  },
  toolBar: {
    width: "80%",
    margin: "0 auto",
  },
  title2: {
    color: theme.palette.theme.main,
  },
  landingText: {
    textAlign: "center",
    color: "white",
    fontSize: "1.5rem",
  },
  landingTextTitle: {
    fontSize: "3rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolBar}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <h3>
                De<span className={classes.title2}>Route.</span>
              </h3>
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <IconButton color="inherit">
                <SortIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.landingText}>
        <div>
          <h3>
            {"Welcome to "}
            <span className={classes.landingTextTitle}>
              De<span className={classes.title2}>Route</span>!
            </span>
          </h3>
          <p>An instant way to start a chat in Messaging Apps</p>
        </div>

        <IconButton>
          <ExpandMoreIcon className={classes.title2} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
