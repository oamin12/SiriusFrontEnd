import React from "react";
import AdminWidgets from "./AdminWidgets";
import "./AdminMain.css";
import AdminChartWidget from "./AdminChartWidget";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AdminUserChart from "./AdminUserChart";
import AdminFollowerBarChart from "./AdminFollowerBarChart/AdminFollowerBarChart";
import AdminLikesBarChart from "./AdminLikesBarChart/AdminLikesBarChart";
import AdminReportsBarChart from "./AdminReportsBarChart/AdminReportsBarChart";
import getUserStats from "./AdminWidgetsInfo";

function AdminMain() {
  const [userStats, setUserStats] = React.useState([
    { counter: "", percentage: "" },
    { counter: "", percentage: "" },
  ]);
  React.useEffect(() => {
    (async () => {
      const resp = await getUserStats();
      setUserStats(resp);
    })();
  }, []);

  return (
    <div className="AdminMain">
      <div className="UserStatistics">
        <div className="AdminMainCards">
          <AdminWidgets
            type="Users/week"
            counter={userStats[0].counter}
            Icon={AccountCircleOutlinedIcon}
            typeLink="see all users"
            percentage={userStats[0].percentage}
          />
          <AdminWidgets
            type="Users/week"
            counter={userStats[1].counter}
            Icon={AccountCircleOutlinedIcon}
            typeLink="see all users"
            percentage={userStats[1].percentage}
          />
        </div>
        <AdminUserChart />
      </div>
      <div className="Charts">
        <AdminChartWidget />
        <AdminFollowerBarChart />
      </div>
      <div className="ChartsCont">
        <AdminLikesBarChart />
        <AdminReportsBarChart />
      </div>
    </div>
  );
}
export default AdminMain;
//pass a component as a prop
