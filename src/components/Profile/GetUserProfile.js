import axios from "axios";
var token = localStorage.getItem("tokenValue");

export default async function GetUserProfile(UserName) {
    console.log("INSIDE FUNCTION",UserName);
    var config = {
        method: 'get',
        url: 'http://localhost:5000/'+UserName,
        headers: {Authorization:"Bearer "+token }
      };
    let response = '';
  try {
    response = await axios.get('http://localhost:5000/'+UserName,config).then((res) => res.data);
    return (response);
  } catch (error) {
    if (error.response) {
      return (error.response);
    }
  }
  return (response);
}