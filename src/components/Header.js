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
    color: "#5aFF3D",
  },
  landingText: {
    textAlign: "center",
    color: "white",
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
        <h1>
          Welcome to <br /> De<span className={classes.title2}>Route !</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
