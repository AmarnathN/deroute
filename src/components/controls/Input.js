import { TextField, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    fontFamily: "Concert One",
  },
}));
const Input = (props) => {
  const classes = useStyles();
  const { name, value, label, errorText = null, onChange, ...other } = props;
  return (
    <TextField
      className={classes.root}
      variant={"outlined"}
      label={label}
      value={value}
      onChange={onChange}
      name={name}
      {...other}
      {...(errorText && { error: true, helperText: errorText })}
    />
  );
};

export default Input;
