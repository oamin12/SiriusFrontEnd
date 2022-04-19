import React from "react";
import AdminWidgets from "./AdminWidgets";
import "./AdminMain.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
const data = [
  {
    id:0,
    type: "Users",
    counter: 720, //hngeebo mn elbackend
    icon: AccountCircleOutlinedIcon,
    typeLink: "see all users",
    percentage: "20%"
  },
  {
    id:1,
    type: "Tweets",
    counter: 1000, //hngeebo mn elbackend
    icon: ChatBubbleOutlineOutlinedIcon,
    typeLink: "see all tweets",
    percentage:"40%"
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
      {data.map(mapCards)}
    </div>
  );
}
export default AdminMain;
//pass a component as a prop
