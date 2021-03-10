import { Grid, makeStyles, Typography } from "@material-ui/core";
import Calendar from "react-calendar";
import DonutChart from "./DonutChart";
import Card from "./Card";
import "react-calendar/dist/Calendar.css";
import "./../styles/calendar.css";

const useStyle = makeStyles({
  root: {
    marginLeft: "240px",
    marginTop: "60px",
    padding: "20px",
  },
  cardContainer: {
    justifyItems: "center",
    marginTop: "30px",
  },
  bottomDiv: {
    margin: "2rem 0 0 0",
  },
});

const HomePage = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography variant="h3" conponent="h3">
        Good Morning, Sir
      </Typography>
      <Grid container className={classes.cardContainer}>
        <Grid item xs={6} lg={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={4}>
          <Card />
        </Grid>
      </Grid>
      <Grid container className={classes.bottomDiv}>
        <Grid item xs={12} lg={8}>
          <div>
            <DonutChart />
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Calendar />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
