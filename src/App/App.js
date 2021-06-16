import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";

import React from "react";
import "./App.css";

import Image from "../assets/route.jpeg";
import Header from "../components/Header";
import Redirector from "../components/Redirector";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ffffff",
    },
    theme: {
      main: "#5aFF3D",
    },
    primary: {
      main: "#5aFF3D",
    },
    background: {
      default: "#e2e2e2",
      light: "#a8a8a8",
      dark: "#00000",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  appMain: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.background.dark,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className={classes.appMain}>
          <Header />
          <Redirector></Redirector>
        </div>
        <CssBaseline></CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
