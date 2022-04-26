import React from "react";
import SideBarAdmin from "../SideBarAdmin";
import AdminMain from "../AdminMain";
import { NavLink } from "react-router-dom";
import ReportIcon from '@mui/icons-material/Report';
import Type1 from "./ReportsTypesArrays/Type1";
import Type2 from "./ReportsTypesArrays/Type2";
import Type3 from "./ReportsTypesArrays/Type3";
import Type4 from "./ReportsTypesArrays/Type4";
import Type5 from "./ReportsTypesArrays/Type5";
import Type6 from "./ReportsTypesArrays/Type6";
import "./ReportCard.css";
import Reporter from "./Reporter";

function mapType1(Type1) {
    return (
        <Reporter
        key={Type1.id}
        profilepic={Type1.profilepic}
        username={Type1.username}
    />
    );
}
function mapType2(Type2) {
    return (
        <Reporter
        key={Type2.id}
        profilepic={Type2.profilepic}
        username={Type2.username}
    />
    );
}

function mapType3(Type3) {
    return (
        <Reporter
        key={Type3.id}
        profilepic={Type3.profilepic}
        username={Type3.username}
    />
    );
}

function mapType4(Type4) {
    return (
        <Reporter
        key={Type4.id}
        profilepic={Type4.profilepic}
        username={Type4.username}
    />
    );
}

function mapType5(Type5) {
    return (
        <Reporter
        key={Type5.id}
        profilepic={Type5.profilepic}
        username={Type5.username}
    />
    );
}

function mapType6(Type6) {
    return (
        <Reporter
        key={Type6.id}
        profilepic={Type6.profilepic}
        username={Type6.username}
    />
    );
}

/**
 * @description page that contaon 6 main types of reports for each user 
 * @returns {div} contains 6 divs each one has the users that reported this user for the 6 different types of reports
 */
function ReportCard() {
  return (
      <div className="ReportMain">
        <div className="ReportHeader">
            <ReportIcon />
            <h1 >User Reports</h1>
        </div>
    <div className="ReportCard">
        <div className="ReportSection">
            <div className="Report"><h3>I'm not interested in this account</h3>
            {Type1.map(mapType1)}
            </div>
            <div className="Report"><h3>It's suspicious or spam</h3>
            {Type2.map(mapType2)}
            </div>
            <div className="Report"><h3>It appers their account is hacked</h3>
            {Type3.map(mapType3)}
            </div>
        </div>
        <div className="ReportSection">
            
            <div className="Report"><h3>They are pretending to be me or someone else</h3>
            {Type4.map(mapType4)}
            </div>
            <div className="Report"><h3>Their Tweets are abusive or hateful</h3>
            {Type5.map(mapType5)}
            </div>
            <div className="Report"><h3>They're expressing intentions of self-harm or suicide</h3>
            {Type6.map(mapType6)}
            </div>
        </div>

      
    </div>
    </div>
  );
}
export default ReportCard;
//pass a component as a prop
