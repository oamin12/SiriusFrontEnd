import axios from "axios";
var token = localStorage.getItem("tokenValue");
var config = {
  method: 'get',
  url: 'http://localhost:5000/Boody',
  headers: {Authorization:"Bearer "+token }
};
export default async function GetProfileInfo() {
  let response = '';
  try {
    response = await axios.get('http://localhost:5000/Boody',config).then((res) => res.data);
    return (response);
  } catch (error) {
    if (error.response) {
      return (error.response);
    }
  }
  return (response);
}