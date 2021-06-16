import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Search, Sort as SortIcon } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    color: "white",
    fontSize: "2rem",
    fontFamily: "Concert One",
  },
  toolBar: {
    width: "80%",
    margin: "0 auto",
  },
  title2: {
    color: "#5aFF3D",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root} elevation={0}>
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
  );
};

export default Header;
