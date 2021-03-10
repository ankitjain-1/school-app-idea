import { makeStyles, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

const useSytles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
  },
  periodCircle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#09C6F9",
    color: "white",
  },
  studentName: {
    padding: "10px 2%",
    margin: "10px",
    backgroundColor: "#E8EFF3",
    borderRadius: "5px",
  },
  buttons: {
    margin: "0 10px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

const AttendanceCard = (props) => {
  const classes = useSytles();
  const [isPresent, setIsPresent] = useState(true);

  const getPeriodNum = (num) => {
    if (num === 1) return "01st";
    else if (num === 2) return "02nd";
    else if (num === 3) return "03rd";
    else return `0${num}th`;
  };

  return (
    <div className={classes.root}>
      <div className={classes.periodCircle}>
        <Typography variant="p" component="h4">
          {getPeriodNum(props.periodNum)}
        </Typography>
        <Typography variant="p" component="h6">
          Period
        </Typography>
      </div>
      <div className={classes.studentName}>{props.studentName}</div>
      <ThemeProvider theme={theme}>
        <Button
          className={classes.buttons}
          onClick={() => setIsPresent(!isPresent)}
          variant={isPresent ? "contained" : "outlined"}
          color={isPresent ? "primary" : "default"}
        >
          Present
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => setIsPresent(!isPresent)}
          variant={isPresent ? "outlined" : "contained"}
          color={isPresent ? "default" : "secondary"}
        >
          Absent
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default AttendanceCard;
