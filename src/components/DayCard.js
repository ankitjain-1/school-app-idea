import { Typography, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "60px",
    textAlign: "center",
    borderRadius: "10px 20px",
    backgroundColor: "#fff",
    boxShadow: "#ccc 1px 1px 20px",
    display: "inline-block",
    margin: "10px 10px",
    cursor: "pointer",
  },
  selected: {
    backgroundColor: "#045DE9",
  },
});

const DayCard = (props) => {
  const classes = useStyles();

  const getClassName = () => {
    let className = classes.root;
    props.selectedDay === props.index
      ? (className += ` ${classes.selected}`)
      : (className += "");
    return className;
  };

  return (
    <Button className={getClassName()}>
      <Typography varient="h6" component="h6">
        {props.date}
      </Typography>
      <Typography varient="h6" component="h6">
        {props.day}
      </Typography>
    </Button>
  );
};

export default DayCard;
