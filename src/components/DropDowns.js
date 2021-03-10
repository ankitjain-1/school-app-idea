import { Select, FormControl, makeStyles, List } from "@material-ui/core";
import { useState } from "react";
import "./../styles/dropDowns.css";

const useStyle = makeStyles({
  root: {
    padding: "20px",
  },
  formControl: {
    margin: "20px",
    backgroundColor: "#494949",
    color: "white",
    borderRadius: "20px",
  },
});

const DropDowns = (props) => {
  const classes = useStyle();
  const [dropDowns, setDropDowns] = useState({
    class: "class",
    section: "section",
    month: "Month",
    session: "session",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDropDowns({ ...dropDowns, [name]: value });
  };

  const monthsName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dev",
  ];
  return (
    <div className={classes.root}>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          native
          name="class"
          value={dropDowns.class}
          onChange={(e) => handleChange(e)}
        >
          <option value={`Class`}>Class</option>
          <option value={`Class1`}>Class1</option>
          <option value={`Class2`}>Class2</option>
          <option value={`Class3`}>Class3</option>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          native
          name="section"
          value={dropDowns.section}
          onChange={handleChange}
        >
          <option value={`Section`}>Section</option>
          <option value={`Section1`}>Section1</option>
          <option value={`Section2`}>Section2</option>
          <option value={`Section3`}>Section3</option>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          native
          name="month"
          value={dropDowns.month}
          onChange={handleChange}
        >
          <option value="month">Month</option>
          {monthsName.map((month) => {
            return (
              <option key={month} value={month}>
                {month}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          native
          name="session"
          value={dropDowns.session}
          onChange={handleChange}
        >
          <option value={`Session`}>Session</option>
          <option value={`Session1`}>Session1</option>
          <option value={`Session2`}>Session2</option>
          <option value={`Session3`}>Session3</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDowns;
