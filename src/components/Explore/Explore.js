import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import "./Explore.css";
import ExploreHeader from "./ExploreHeader";
import Card from "../Search/Card";
import people from "../Search/people";
import TrendsData from "./TrendsData";
import Trend from "./Trend";
import SearchBox from "../Search/SearchBox";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import axios from "axios";

//make width same as home/profile
/**
 * @param {object} Trends id, number, type, name, tweets per trend
 * @description Component containing the the trending topics
 * @returns A div component that renders this component
 */
function Explore() {
  const [trendsInfo, setTrendsInfo] = React.useState([]);
  const [pageState,setPageState]= React.useState("foryou");
  
  var token = sessionStorage.getItem("tokenValue");
  var config = {
    method: "get",
    url: "http://34.236.108.123:3000/explore",
    headers: { Authorization: "Bearer " + token },
  };
  async function GetExploreInfo() {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/explore", config)
        .then((res) => res.data);
      //console.log(response.tweetData);
      setTrendsInfo(response.hashtags);

      return response.hashtags;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }

    return response;
  }
  React.useEffect(() => {
    (async () => {
      const resp = await GetExploreInfo();
      setTrendsInfo(resp);
      console.log(trendsInfo);
    })();
  }, []);

  function CreateTrends(Trends) {
    if(pageState==="foryou"){
    return (
      <Trend
        key={Trends.id}
        number={Trends.rank}
        type={Trends.type}
        name={Trends.body}
        tweets_num={Trends.tweetsCount}
      />
    );}
    if(pageState==="entertain" && Trends.type==="Entertainment"){
      return (
        <Trend
          key={Trends.id}
          number={Trends.rank}
          type={Trends.type}
          name={Trends.body}
          tweets_num={Trends.tweetsCount}
        />
      );}
      if(pageState==="sports" && Trends.type==="Sports"){
        return ( 
          <Trend
            key={Trends.id}
            number={Trends.rank}
            type={Trends.type}
            name={Trends.body}
            tweets_num={Trends.tweetsCount}
          />
        );}
        if(pageState==="news" && Trends.type==="News"){
          return (
            <Trend
              key={Trends.id}
              number={Trends.rank}
              type={Trends.type}
              name={Trends.body}
              tweets_num={Trends.tweetsCount}
            />
          );}
  }
  

  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ExploreHeader pageFlag={setPageState} />
        {trendsInfo.map(CreateTrends)}
      </div>
      <div className="widgets">
        {/* <div className="search">
        <SearchBox size="40"
            styling=
            { {width: "30%",
            marginTop: "-15.5%",
            marginLeft: "70%",
            height:'60%',}}/>
          </div> */}
        <div className="whoToFollow">
          {" "}
          <WhoToFollow />{" "}
        </div>
      </div>
    </div>
  );
}

export default Explore;
