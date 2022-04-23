import React from "react";
import AdminWidgets from "./AdminWidgets";
import "./AdminMain.css";
import AdminChartWidget from "./AdminChartWidget";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AdminUserChart from "./AdminUserChart";
import AdminFollowerBarChart from "./AdminFollowerBarChart/AdminFollowerBarChart";
import AdminLikesBarChart from "./AdminLikesBarChart/AdminLikesBarChart";
import AdminReportsBarChart from "./AdminReportsBarChart/AdminReportsBarChart";
const data = [
  {
    id: 0,
    type: "Users/day",
    counter: 720, //hngeebo mn elbackend
    icon: AccountCircleOutlinedIcon,
    typeLink: "see all users",
    percentage: "20%",
  },
  {
    id: 1,
    type: "Users/week",
    counter: 720, //hngeebo mn elbackend
    icon: AccountCircleOutlinedIcon,
    typeLink: "see all users",
    percentage: "20%",
  },
];
function mapCards(cards) {
  return (
    <AdminWidgets
      key={cards.id}
      type={cards.type}
      counter={cards.counter}
      Icon={cards.icon}
      typeLink={cards.typeLink}
      percentage={cards.percentage}
    />
  );
}
function AdminMain() {
  return (
    <div className="AdminMain">
      <div className="UserStatistics">
        <div className="AdminMainCards">{data.map(mapCards)}</div>
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
