import { makeStyles, Typography } from "@material-ui/core";
import avatar from "./../assets/avatar.png";
import doubleArrow from "./../assets/doubleArrow.png";

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "30%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

const AdminDetails = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <img src={avatar} alt="avatar" />
      <div className={classes.details}>
        <Typography variant="p" component="h4">
          Fr. Paul D'Souza
        </Typography>
        <Typography variant="p" component="h5">
          Admin Account
        </Typography>
      </div>
      <img src={doubleArrow} alt="icon" />
    </div>
  );
};

export default AdminDetails;
