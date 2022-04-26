import axios from "axios";
var token = localStorage.getItem("tokenValue");
var UserName=localStorage.getItem("UserName");
  var config = {
  method: 'get',
  url: 'http://34.236.108.123:3000/'+UserName,
  headers: {Authorization:"Bearer "+token }
};
export default async function GetProfileInfo() {
  let response = '';
  try {
    response = await axios.get('http://34.236.108.123:3000/'+UserName,config).then((res) => res.data);
    return (response);
  } catch (error) {
    if (error.response) {
      return (error.response);
    }
  }
  return (response);
}