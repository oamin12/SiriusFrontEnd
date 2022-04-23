import React from "react";
import "./AdminLikesBarChart.css";

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

const data = [
  {
    name: "Person A",
    Likes: 400,
  },
  {
    name: "Person B",
    Likes: 300,
  },
  {
    name: "Person C",
    Likes: 300,
  },
  {
    name: "Person D",
    Likes: 200,
  },
  {
    name: "Person E",
    Likes: 200,
  },
];
function AdminLikesBarChart() {
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
        Top 5 Liked Tweets
      </h2>
      <div>
        <ResponsiveContainer height={200}>
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label="Likes" />
            <YAxis />
            <Tooltip
              wrapperStyle={{ width: "auto" }}
              labelStyle={{ color: "rgb(101, 119, 134)" }}
              itemStyle={{ color: "rgb(101, 119, 134)" }}
              formatter={(Likes, name, props) => [Likes + " Likes", name]}
            />
            <Bar dataKey="Likes" fill="#1DA1F2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default AdminLikesBarChart;
//pass a component as a prop
