 import axios from "axios";
// export default async function getAllUsers() {
//   let response = "";
//   try {
//     response = await axios
//       .get("http://localhost:3001/AllUsers")
//       .then((res) => res.data);
//     return response;
//   } catch (error) {
//     if (error.response) {
//       /*
//        * The request was made and the server responded with a
//        * status code that falls out of the range of 2xx
//        */
//       return error.response;
//     }
//   }
//   return response;
// }
var token = sessionStorage.getItem("tokenValue");
export default async function getAllUsers() {

  var config = {
      method: 'get',
      // url: 'http://34.236.108.123:3000/'+UserName,
      headers: {Authorization:"Bearer "+token }
    };
  let response = '';
try {
  response = await axios.get('http://34.236.108.123:3000/admin/user',config).then((res) => res.data);
  console.log(response)
  return (response);
} catch (error) {
  if (error.response) {
    return (error.response);
  }
}
return (response);
}
