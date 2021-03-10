import { useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  attendanceCard: {
    padding: "30px",
    backgroundColor: "white",
    boxShadow: "#d8d8d8 1px 1px 30px",
    borderRadius: "20px",
    margin: "0 30px",
    marginRight: "10%",
    paddingBottom: 0,
    marginBottom: "30px",
  },
});

const DonutChart = (props) => {
  const classes = useStyle();
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { name: "Students Present", value: 1820 },
    { name: "Students Absent", value: 466 },
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${value} Students`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <div className={classes.attendanceCard}>
      <Grid container>
        <Grid item xs={7}>
          <Typography variant="h5">Attendance</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="body2">Total Overall Attendance</Typography>
        </Grid>
        <PieChart width={800} height={320}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="40%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={true}
            onMouseEnter={(_, index) => {
              setActiveIndex(index);
            }}
          />
        </PieChart>
      </Grid>
    </div>
  );
};

export default DonutChart;
