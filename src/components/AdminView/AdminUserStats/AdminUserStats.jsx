import React from "react";
import "./AdminUserStats.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import getAdminUserStatsTweets from "./AdminUserStatsTweets";
import getAdminUserStatsFollowers from "./AdminUserStatsFollowers";
import getAdminUserStatsInfo from "./AdminUserStatsInfo";

import { LineChart, XAxis, Line, ResponsiveContainer } from "recharts";

var percentageState = false;

function AdminUserStats() {
  const [AdminUserTweets, setAdminUserTweets] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await getAdminUserStatsTweets();
      setAdminUserTweets(resp);
    })();
  }, []);

  const [AdminUserFollowers, setAdminUserFollowers] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await getAdminUserStatsFollowers();
      setAdminUserFollowers(resp);
    })();
  }, []);

  const [AdminUserStats, setAdminUserStats] = React.useState([
    { value: "", percentage: "" },
    { value: "", percentage: "" },
  ]);
  React.useEffect(() => {
    (async () => {
      const resp = await getAdminUserStatsInfo();
      setAdminUserStats(resp);
    })();
  }, []);

  return (
    <div className="AdminUserStats">
      <div className="UserStatsSection">
        <p style={{ color: "#66757f", fontSize: "15px" }}>Tweets </p>
        <div className="StatsPercentage">
          <p style={{ fontSize: "27px", width: "auto", marginRight: "5px" }}>
            {AdminUserStats[0].value}
          </p>
          <div
            className="ArrowStats"
            style={{ color: percentageState ? "green" : "red" }}
          >
            <ArrowDownwardIcon fontSize="small" />
            {AdminUserStats[0].percentage}
          </div>
        </div>
        <ResponsiveContainer height={100} width={200}>
          <LineChart width={200} height={100} data={AdminUserTweets}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="rgb(29, 161, 242)"
              strokeWidth={1}
            />
            <XAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="UserStatsSection">
        <p style={{ color: "#66757f", fontSize: "15px" }}>Followers</p>
        <div className="StatsPercentage">
          <p style={{ fontSize: "27px", width: "auto", marginRight: "5px" }}>
            {AdminUserStats[1].value}
          </p>
          <div
            className="ArrowStats"
            style={{ color: percentageState ? "green" : "red" }}
          >
            <ArrowDownwardIcon fontSize="small" />
            {AdminUserStats[1].percentage}
          </div>
        </div>
        <ResponsiveContainer height={100} width={200}>
          <LineChart width={200} height={100} data={AdminUserFollowers}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="rgb(29, 161, 242)"
              strokeWidth={1}
            />
            <XAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminUserStats;
