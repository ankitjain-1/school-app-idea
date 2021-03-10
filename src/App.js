import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import AttendancePage from "./components/AttendancePage";
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
        <div className="App">
          <SideBar />
          <Route path="/" exact component={HomePage} />
          <Route path="/attendance" exact component={AttendancePage} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
