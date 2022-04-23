import React, { PureComponent } from "react";
import {
  AreaChart,
  Tooltip,
  CartesianGrid,
  YAxis,
  XAxis,
  linearGradient,
  Area,
  ResponsiveContainer,
} from "recharts";
import "./AdminUserChart.css";

const data = [
  {
    name: "Saturday",
    Users: 400, //the number of new users
  },
  {
    name: "Sunday",
    Users: 300,
  },
  {
    name: "Monday",
    Users: 300,
  },
  {
    name: "Tuesday",
    Users: 200,
  },
  {
    name: "Wednesday",
    Users: 200,
  },
  {
    name: "Thursday",
    Users: 200,
  },
  {
    name: "Friday",
    Users: 200,
  },
];
function AdminUserChart() {
  return (
    <div className="AdminUserChart">
      <h2
        style={{
          textAlign: "center",
          color: "rgb(101, 119, 134)",
          borderBottom: "1px solid rgb(101, 119, 134)",
          padding: "10px",
          marginBottom: "30px",
        }}
      >
        Users per week
      </h2>
      <div>
        <ResponsiveContainer height={160}>
          <AreaChart
            width={500}
            height={170}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1DA1F2" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1DA1F2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" label="Days of week" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
                          wrapperStyle={{ width: "auto" }}
                          labelStyle={{ color: "rgb(101, 119, 134)" }}
                          itemStyle={{ color: "rgb(101, 119, 134)" }}
                          formatter={(Users, name, props) => [Users + " user", name]}
            />
            <Area
              type="monotone"
              dataKey="Users"
              stroke="#1DA1F2"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default AdminUserChart;
//pass a component as a prop
