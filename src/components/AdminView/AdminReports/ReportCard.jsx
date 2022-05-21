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
import axios from "axios";

function mapType1(Type1) {
    return (
        <Reporter
        key={Type1.whoReported[0]._id}
        img={Type1.whoReported[0].image}
        username={Type1.whoReported[0].username}

    />
    );
}
function mapType2(Type2) {
    return (
        <Reporter
        key={Type2.whoReported[0]._id}
        img={Type2.whoReported[0].image}
        username={Type2.whoReported[0].username}
    />
    );
}

function mapType3(Type3) {
    return (
        <Reporter
        key={Type3.whoReported[0]._id}
        img={Type3.whoReported[0].image}
        username={Type3.whoReported[0].username}
    />
    );
}

function mapType4(Type4) {
    return (
        <Reporter
        key={Type4.whoReported[0]._id}
        img={Type4.whoReported[0].image}
        username={Type4.whoReported[0].username}
    />
    );
}

function mapType5(Type5) {
    return (
        <Reporter
        key={Type5.whoReported[0]._id}
        img={Type5.whoReported[0].image}
        username={Type5.whoReported[0].username}
    />
    );
}

function mapType6(Type6) {
    return (
        <Reporter
        key={Type6.whoReported[0]._id}
        img={Type6.whoReported[0].image}
        username={Type6.whoReported[0].username}
    />
    );
}


function ReportCard() {
    const [Type1,setType1]=React.useState([]);
    const [Type2,setType2]=React.useState([]);
    const [Type3,setType3]=React.useState([]);
    const [Type4,setType4]=React.useState([]);
    const [Type5,setType5]=React.useState([]);
    const [Type6,setType6]=React.useState([]);
    const [success,setSuccess]=React.useState("");
    var user = localStorage.getItem("UserProfile");
    var token = sessionStorage.getItem("tokenValue");

async function reportsPerUser(user) {

  var config = {
      method: 'get',
      // url: 'http://34.236.108.123:3000/'+UserName,
      headers: {Authorization:"Bearer "+token }
    };
  let response = '';
try {
  response = await axios.get('http://34.236.108.123:3000/admin/'+user+'/reports',config).then((res) => res.data);
  
  setSuccess(response.success)
  return (response.reports);
} catch (error) {
  if (error.response) {
    return (error.response);
  }
}
return (response);
}


React.useEffect(() => {
    (async () => {
      const resp = await reportsPerUser(localStorage.getItem("UserProfile"));
     setType1(resp.type1);
     setType2(resp.type2);
     setType3(resp.type3);
     setType4(resp.type4);
     setType5(resp.type5);
     setType6(resp.type6);
     console.log(resp);
    })();
}, []);

  return (
      <div className="ReportMain">
        <div className="ReportHeader">
            <ReportIcon />
            <h1 >User Reports</h1>
        </div>
    <div className="ReportCard">
        <div className="ReportSection">
            <div className="Report"><h3>I'm not interested in this account</h3>
            {Type1?.map(mapType1)}
            </div>
            <div className="Report"><h3>It's suspicious or spam</h3>
            {Type2?.map(mapType2)}
            </div>
            <div className="Report"><h3>It appers their account is hacked</h3>
            {Type3?.map(mapType3)}
            </div>
        </div>
        <div className="ReportSection">
            
            <div className="Report"><h3>They are pretending to be me or someone else</h3>
            {Type4?.map(mapType4)}
            </div>
            <div className="Report"><h3>Their Tweets are abusive or hateful</h3>
            {Type5?.map(mapType5)}
            </div>
            <div className="Report"><h3>They're expressing intentions of self-harm or suicide</h3>
            {Type6?.map(mapType6)}
            </div>
        </div>

      
    </div>
    </div>
  );
}
export default ReportCard;
//pass a component as a prop
