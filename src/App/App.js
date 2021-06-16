import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";

import React from "react";
import "./App.css";

import Image from "../assets/route.jpeg";
import Header from "../components/Header";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ff6200",
      light: "#f57b2f",
    },
    theme: {
      main: "#5aFF3D",
      light: "#a7d4d0",
    },
    primary: {
      main: "#00e0ce",
      light: "#82d1cb",
    },
    background: {
      // default: "#f2f2f2",
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
        </div>
        <CssBaseline></CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
