import axios from "axios";
/**
 * @description This function is the mock function that gets the data of users from mockserver
 * @returns {object} -pp -username -bio 
 * 
 */
export default async function getAllUsers() {
  let response = "";
  try {
    response = await axios
      .get("http://localhost:3001/AllUsers")
      .then((res) => res.data);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
  return response;
}
