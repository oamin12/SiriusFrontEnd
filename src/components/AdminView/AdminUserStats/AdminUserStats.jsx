import React from "react";
import "./AdminUserStats.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { LineChart,XAxis, Line, ResponsiveContainer } from "recharts";

var percentageState = false;

const data = [
    {
      name: "Page A",
      value: 0,
    },
    {
      name: "Page B",
      value: 10
    },
    {
      name: "Page C",
      value: 15
    },
    {
      name: "Page D",
      value: 30

    },
    {
      name: "Page E",
      value: 70
    },
    {
      name: "Page F",
      value: 120
    },
    {
      name: "Page G",
      value: 140

    }
  ];
  

function AdminUserStats() {
    return (
        <div className="AdminUserStats">
            <div className="UserStatsSection">
                <p style={{color:"#66757f", fontSize:"15px"}}>Tweets </p>
                    <div className="StatsPercentage">
                        <p style={{fontSize:"27px" ,width:"auto", marginRight:"5px"}}>4</p>
                    <div  className="ArrowStats" style={{ color: percentageState ? "green" : "red" }}>
                    
                <ArrowDownwardIcon fontSize="small"/>
                20%
            </div>
                </div>
                <ResponsiveContainer height={100} width={200}>
                        <LineChart width={200} height={100} data={data}>
                        <Line type="monotone" dataKey="value" stroke="rgb(29, 161, 242)" strokeWidth={1} />
                        <XAxis />
                        </LineChart> 
                    </ResponsiveContainer>
                    </div>
                    <div className="UserStatsSection">
                        <p style={{color:"#66757f", fontSize:"15px"}}>Followers</p>
                    <div className="StatsPercentage">
                        <p style={{fontSize:"27px",width:"auto", marginRight:"5px"}}>140</p>
                    <div className="ArrowStats"  style={{ color: percentageState ? "green" : "red" }}>
                    <ArrowDownwardIcon fontSize="small"/>
                    5
                    </div>

                    </div>
                    <ResponsiveContainer height={100} width={200} >
                        <LineChart width={200} height={100} data={data}>
                        <Line type="monotone" dataKey="value" stroke="rgb(29, 161, 242)" strokeWidth={1} />
                        <XAxis />
                        </LineChart> 
                    </ResponsiveContainer>
                    </div>
        </div>

    );
}

export default AdminUserStats;