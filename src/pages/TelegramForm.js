import {
  Card,
  Box,
  CardActions,
  CardContent,
  Grid,
  Paper,
  IconButton,
  CardMedia,
  makeStyles,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { MyControls } from "../components/controls/MyControls";
import Image from "../assets/telegram.jpeg";

const intialFieldValues = {
  username: "vayuteja",
  message: "",
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  text: {
    fontFamily: "Concert One",
  },
  media: {
    height: 140,
  },
});

const TelegramForm = (props) => {
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("username" in fieldValues) {
      temp.username = fieldValues.username.length > 0 ? "" : "This field is required";
    }
    setErrors({
      ...temp,
    });
    if (fieldValues === values) {
      return Object.values(temp).every((x) => x == "");
    }
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = MyControls.useForm(intialFieldValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(values)) {
    }
  };

  return (
    <Paper style={{ background: "none" }}>
      <Card>
        <CardMedia className={classes.media} image={Image} title="WhatsApp Image"></CardMedia>
        <Paper>
          <CardContent style={{ background: "rgba(26, 174, 237, 0.1)" }}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
              Telegram Chat
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
              Telegram provides a facility to send instant message to a Telegram user with username with a custom chat message .
              <br />
              <br />
              Please note that Telegram does not provide instant message using phone number with out saving as contact
            </Typography>
          </CardContent>
        </Paper>
        <Paper elevation={4} display="flex">
          <MyControls.Form onSubmit={handleSubmit}>
            <Grid container justify={"space-between"} alignContent={"center"}>
              <Grid item md={12} sm={12} xs={12}>
                <MyControls.Input
                  label="Username"
                  value={values.username}
                  onChange={handleInputChange}
                  name="username"
                  errorText={errors.username}
                />
              </Grid>
            </Grid>
          </MyControls.Form>
        </Paper>
      </Card>
      <Box justifyContent={"center"} display="flex">
        <Link href={`https://telegram.me/${values.username}`}>
          <MyControls.Button color={"default"} size="medium" text="Start Telegram Chat" />
        </Link>
      </Box>
    </Paper>
  );
};

export default TelegramForm;
