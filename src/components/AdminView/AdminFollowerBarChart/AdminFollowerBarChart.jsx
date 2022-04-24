import React from "react";
import "./AdminFollowerBarChart.css";

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
import getTopFollowers from "./AdminFollowerBarChartInfo";

function AdminBarChart() {
  const [topFollowers, setTopFollowers] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await getTopFollowers();
      setTopFollowers(resp);
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
        Top 5 followed
      </h2>
      <div>
        <ResponsiveContainer height={200}>
          <BarChart width={730} height={250} data={topFollowers}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label="Follower" />
            <YAxis />
            <Tooltip
              wrapperStyle={{ width: "auto" }}
              labelStyle={{ color: "rgb(101, 119, 134)" }}
              itemStyle={{ color: "rgb(101, 119, 134)" }}
              formatter={(Followers, name, props) => [
                Followers + " Follower",
                name,
              ]}
            />
            <Bar dataKey="Followers" fill="#1DA1F2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default AdminBarChart;
//pass a component as a prop
