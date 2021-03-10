import { useState } from "react";
import { useHistory } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import logo from "./../assets/Logo_small.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TimelineIcon from "@material-ui/icons/Timeline";
import EventIcon from "@material-ui/icons/Event";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import BookIcon from "@material-ui/icons/Book";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AdminDetails from "./../components/AdminDetails";
import "./../styles/sideBar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    boxShadow: "none",
    padding: "10px 40px 10px 20px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
    color: "black",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: "0",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(3),
      marginLeft: "auto",
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    width: "72px",
    height: "80px",
    margin: "20% 30%",
  },
}));

export default function SideBar() {
  const history = useHistory();
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(window.location.hash);
  const [notificationCount, setNotificationCount] = useState(5);

  const getFullDate = () => {
    const date = new Date();
    const dateNum = date.getDate();
    const day = date.toLocaleDateString("default", { weekday: "short" });
    const month = date.toLocaleString("default", { month: "long" });
    const fullDate = `${day}, ${dateNum} ${month}`;
    return fullDate;
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              {getFullDate()}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <IconButton
              style={{ boxShadow: "rgb(191, 191, 191) 1px 10px 20px" }}
              onClick={() => {
                setNotificationCount(notificationCount + 1);
              }}
              variant=""
            >
              <Badge badgeContent={notificationCount} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <img className={classes.logo} src={logo} alt="logo" />
          <List>
            {[
              { text: "Home", icon: <HomeIcon />, url: "/home" },
              {
                text: "Notice Board",
                icon: <DashboardIcon />,
                url: "/noticeBoard",
              },
              {
                text: "Attendance",
                icon: <TimelineIcon />,
                url: "/attendance",
              },
              {
                text: "Fees Details",
                icon: <AssignmentIcon />,
                url: "/feesDetails",
              },
              { text: "Calendar", icon: <EventIcon />, url: "/calendar" },
              {
                text: "Multimedia",
                icon: <PermMediaIcon />,
                url: "/multimedia",
              },
              {
                text: "Time-tables",
                icon: <BorderAllIcon />,
                url: "/timeTable",
              },
              { text: "Schedules", icon: <BookIcon />, url: "/schedules" },
              {
                text: "Support Request",
                icon: <PeopleAltIcon />,
                url: "/supportRequest",
              },
              { text: "Support", icon: <EmojiFlagsIcon />, url: "/support" },
              { text: "Account", icon: <PersonOutlineIcon />, url: "/account" },
            ].map((item, index) => (
              <ListItem
                key={item.text}
                selected={selectedIndex === `#${item.url}`}
                button
                onClick={() => {
                  history.push(`${item.url}`);
                  setSelectedIndex(`#${item.url}`);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <AdminDetails />
        </Drawer>
      </div>
    </>
  );
}
