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
import Image from "../assets/whatsapp.webp";

const intialFieldValues = {
  countryCode: "+91",
  mobile: "9731415162",
  message: "",
};

const useStyles = makeStyles({
  root: {
    fontFamily: "Concert One",
    background: "none",
  },
  text: {
    fontFamily: "Concert One",
  },
  media: {
    height: 140,
  },
});

const WhatsAppForm = (props) => {
  const classes = useStyles();
  const { setNotify } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("countryCode" in fieldValues) {
      var regex = /^\+(\d{1}\-)?(\d{1,3})$/;
      temp.countryCode = fieldValues.countryCode.length > 0 ? "" : "This field is required";
      temp.countryCode =
        temp.countryCode != "" ? temp.countryCode : fieldValues.countryCode.match(regex) ? "" : "Valid country Code is Required";
    }

    if ("mobile" in fieldValues) {
      temp.mobile = isNaN(fieldValues.mobile) ? "Valid Mobile Number is Required" : "";
      temp.mobile = temp.mobile != "" ? temp.mobile : fieldValues.mobile.length == 10 ? "" : "Length is should be 10";
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
    <Paper className={classes.root}>
      <Card>
        <CardMedia className={classes.media} image={Image} title="WhatsApp Image"></CardMedia>
        <Paper>
          <CardContent style={{ background: "rgba(90, 255, 61, 0.1)" }}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
              WhatsApp Chat
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
              WhatsApp provides a facility to send instant message to a phone number with a custom chat message .
              <br />
              <br />
              Please enter valid phone number with required message to start an instant chat.
            </Typography>
          </CardContent>
        </Paper>
        <MyControls.Form onSubmit={handleSubmit}>
          <Grid container justify={"space-between"} alignContent={"center"}>
            <Grid item md={2} sm={12} xs={12}>
              <MyControls.Input
                label="Country Code"
                name="countryCode"
                value={values.countryCode}
                onChange={handleInputChange}
                errorText={errors.countryCode}
              />
            </Grid>
            <Grid item md={10} sm={12} xs={12}>
              <MyControls.Input
                label="Mobile Number"
                value={values.mobile}
                onChange={handleInputChange}
                name="mobile"
                errorText={errors.mobile}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <MyControls.Input label="Message" value={values.message} onChange={handleInputChange} name="message" />
            </Grid>
          </Grid>
        </MyControls.Form>
      </Card>
      <Box justifyContent={"center"} display="flex">
        <Link href={`https://wa.me/${values.countryCode}${values.mobile}?text=${values.message}`}>
          <MyControls.Button color="primary" size="medium" text="Start WhatsApp Chat" />
        </Link>
      </Box>
      <Box justifyContent={"center"} display="flex">
        <Link href={`tel:${values.countryCode}${values.mobile}`}>
          <MyControls.Button color="default" size="medium" text="Make a Dailer Call" />
        </Link>
      </Box>
    </Paper>
  );
};

export default WhatsAppForm;
