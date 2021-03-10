import developmentImg from "./../assets/development.svg";
import { Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    marginLeft: "240px",
    marginTop: "60px",
    padding: "20px",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: "30vw",
  },
});

const NotCreatedPage = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h4">
        This Page is Under Development
      </Typography>
      <img class={classes.img} src={developmentImg} alt="under development" />
    </div>
  );
};

export default NotCreatedPage;
