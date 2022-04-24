import axios from "axios";
export default async function GetProfileInfo() {
  let response = '';
  try {
    response = await axios.get('http://localhost:3001/profile').then((res) => res.data);
    return (response);
  } catch (error) {
    if (error.response) {
      return (error.response);
    }
  }
  return (response);
}