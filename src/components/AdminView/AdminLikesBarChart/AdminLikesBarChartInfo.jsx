import axios from "axios";
export default async function getTopLikes() {
  let response = "";
  try {
    response = await axios
      .get("http://localhost:3001/TopLikes")
      .then((res) => res.data);
    return response;
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      return error.response;
    }
  }
  return response;
}
