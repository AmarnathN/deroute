import { AppBar, Badge, Collapse, Grid, IconButton, InputBase, makeStyles, Paper, Toolbar, Typography } from "@material-ui/core";
import { Search, Sort as SortIcon, ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import React, { useState } from "react";
import TelegramForm from "../pages/TelegramForm";
import WhatsAppForm from "../pages/WhatsAppForm";
import { MyControls } from "./controls/MyControls";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    display: "flex",
    fontFamily: "Concert One",
  },
  content: {
    width: "80%",
    minHeight: "60vh",
    background: "rgba(0,0,0,0.5)",
    color: theme.palette.theme.main,
  },
}));

const Redirector = () => {
  const classes = useStyles();
  const [notify, setNotify] = useState({ isOpen: false, alertMessage: "", alertType: "" });
  return (
    <div className={classes.root}>
      <Paper className={classes.content}>
        <MyControls.Tabs
          tabsList={[
            { label: "Whats App", component: <WhatsAppForm setNotify={setNotify} /> },
            { label: "Telegram", component: <TelegramForm setNotify={setNotify} /> },
          ]}
          style={{ background: "rgba(255, 255, 255, 0.1)" }}
        ></MyControls.Tabs>
      </Paper>
    </div>
  );
};

export default Redirector;
