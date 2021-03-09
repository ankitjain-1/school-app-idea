import {
  Card as MCard,
  makeStyles,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "350px",
    display: "inline-block",
    padding: "20px 30px",
    margin: "10px",
    background: "linear-gradient(to bottom right, #1398D3, #0B5BC6)",
    color: "white",
    borderRadius: "20px",
  },
  cardButton: {
    background: "white",
    color: "black",
  },
});

const Card = (props) => {
  const classes = useStyles();
  return (
    <MCard className={classes.root}>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h6" component="h3">
            Holi Holiday
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button size="small" className={classes.cardButton}>
            Holiday
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2">
            Activate every muscle group to get the results you've always wanted.
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Typography variant="overline" component="h2">
            15 March, 2021
          </Typography>
        </Grid>
      </Grid>
    </MCard>
  );
};

export default Card;
