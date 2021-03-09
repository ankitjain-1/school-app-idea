import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import Attendance from "./components/Attendance";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/attendance" exact component={Attendance} />
      </div>
    </Router>
  );
}

export default App;
