import axios from "axios";
var token = localStorage.getItem("tokenValue");
var UserName=localStorage.getItem("UserName");
  var config = {
  method: 'get',
  url: 'http://localhost:5000/'+UserName,
  headers: {Authorization:"Bearer "+token }
};
export default async function GetProfileInfo() {
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