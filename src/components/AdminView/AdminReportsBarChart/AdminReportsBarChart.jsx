import React from "react";
import "./AdminReportsBarChart.css";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import getTopReports from "./AdminReportsBarChartInfo";
import dashBoardStats from "../AdminUserChartInfo";

/**
 * @description Component that represents a bar chart representing the top 5 reported users
 * @returns {div} A div that contains the component
 */
function AdminReportsBarChart() {
  const [topReported, setTopReported] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await dashBoardStats();
      setTopReported(resp.TopReported);
    })();
  }, []);
  return (
    <div className="AdminBarChart">
      <h2
        style={{
          textAlign: "center",
          color: "rgb(101, 119, 134)",
          borderBottom: "1px solid rgb(101, 119, 134)",
          padding: "10px",
          marginBottom: "30px",
        }}
      >
        Top 5 Reported users
      </h2>
      <div>
        <ResponsiveContainer height={200}>
          <BarChart width={730} height={250} data={topReported}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label="Reports" />
            <YAxis />
            <Tooltip
              wrapperStyle={{ width: "auto" }}
              labelStyle={{ color: "rgb(101, 119, 134)" }}
              itemStyle={{ color: "rgb(101, 119, 134)" }}
              formatter={(Reports, name, props) => [Reports + " Reports", name]}
            />
            <Bar dataKey="Reports" fill="#1DA1F2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default AdminReportsBarChart;
//pass a component as a prop
