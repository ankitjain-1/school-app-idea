import { useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import DropDowns from "./../components/DropDowns";
import DayCard from "./../components/DayCard";
import AttendanceCard from "./../components/AttendanceCard";

const useStyle = makeStyles({
  root: {
    marginLeft: "240px",
    marginTop: "60px",
    padding: "20px",
  },
  dayCardsContainer: {
    margin: "0 40px",
  },
  attendanceCardsContainer: {
    margin: "40px 40px",
  },
});

const AttendacnePage = (props) => {
  const classes = useStyle();
  const [selectedDay, setSelectedDay] = useState(0);

  const getDayCards = () => {
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const items = [];
    for (let i = 1; i <= 15; i++) {
      items.push(
        <div style={{ display: "inline" }} onClick={() => setSelectedDay(i)}>
          <DayCard
            selectedDay={selectedDay}
            index={i}
            key={i}
            date={i}
            day={weekDays[i % 7]}
          />
        </div>
      );
    }
    return items;
  };

  const getAttendanceCards = () => {
    let items = [];
    for (let i = 1; i <= 8; i++) {
      items.push(<AttendanceCard studentName="Abhishek Yadav" periodNum={i} />);
    }
    return items;
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h3">
        <strong>Attendance</strong>
      </Typography>
      <DropDowns />
      <div className={classes.dayCardsContainer}>{getDayCards()}</div>
      <div className={classes.attendanceCardsContainer}>
        {getAttendanceCards()}
      </div>
    </div>
  );
};

export default AttendacnePage;
