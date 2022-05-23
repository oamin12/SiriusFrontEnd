import axios from "axios";
var token = sessionStorage.getItem("tokenValue");
export default async function getTweet(tweetid) {
  var config = {
    method: "get",
    headers: { Authorization: "Bearer " + token },
  };
  let response = '';
  try {
    response = await axios.get('http://34.236.108.123:3000/home/'+tweetid+'/getTweetById',config).then((res) => res.data);
    return (response);
  } catch (error) {
    if (error.response) {
      /*
        * The request was made and the server responded with a
        * status code that falls out of the range of 2xx
        */
      return (error.response);
    }
  }
  return (response);
}