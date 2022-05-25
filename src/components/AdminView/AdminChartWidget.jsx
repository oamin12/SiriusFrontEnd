import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./AdminChartWidget.css";
import getTopTrendingTweets from "./AdminChartWidgetInfo";
import dashBoardStats from "./AdminUserChartInfo";

const COLORS = ["#00bfff", " #33ccff", "#66d9ff", "#99e6ff", "#b3ecff"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={"middle"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
/**
 * @description Component that contains a pie chart representing the number of tweets per top trending and calculates its percentage
 * @returns {div} A div that returns that component
 */
function AdminChartWidget() {
  const [topTrendingTweets, setTopTrendingTweets] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await dashBoardStats();
      setTopTrendingTweets(resp.topTweetsPerTrend);
    })();
  }, []);
  return (
    <div className="AdminChartWidget">
      <h2
        style={{
          textAlign: "center",
          color: "rgb(101, 119, 134)",
          borderBottom: "1px solid rgb(101, 119, 134)",
          padding: "10px",
          marginBottom: "30px",
        }}
      >
        Top tweets per trend
      </h2>
      <div>
        <ResponsiveContainer height={200}>
          <PieChart width={730} height={250}>
            <Pie
              data={topTrendingTweets}
              dataKey="count"
              nameKey="hashtag"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={renderCustomizedLabel}
              labelLine={false}
              isAnimationActive={false}
            >
              {topTrendingTweets?.map((entry, index) => (
                <Cell  fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              wrapperStyle={{ width: "auto" }}
              itemStyle={{ color: "rgb(101, 119, 134)" }}
              formatter={(value, name, props) => [value + " tweets", name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default AdminChartWidget;
//pass a component as a prop
