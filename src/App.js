import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import AttendancePage from "./components/AttendancePage";
import NotCreatedPage from "./components/NotCreatedPage";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <div className="App">
            <SideBar />
            <Route path="/home" component={HomePage} />
            <Route path="/noticeBoard" component={NotCreatedPage} />
            <Route path="/attendance" component={AttendancePage} />
            <Route path="/feesDetails" component={NotCreatedPage} />
            <Route path="/calendar" component={NotCreatedPage} />
            <Route path="/multimedia" component={NotCreatedPage} />
            <Route path="/timeTable" component={NotCreatedPage} />
            <Route path="/schedules" component={NotCreatedPage} />
            <Route path="/supportRequest" component={NotCreatedPage} />
            <Route path="/support" component={NotCreatedPage} />
            <Route path="/account" component={NotCreatedPage} />
          </div>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
