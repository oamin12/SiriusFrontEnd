import axios from "axios";
var config = {
  method: 'get',
  url: 'http://localhost:5000/Boody',
  headers: {Authorization:"Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjYwNDg0ZTI4OGE0MDVhMGQyNjIxOCIsImlhdCI6MTY1MDg1MzM3NCwiZXhwIjoxNjU5NDkzMzc0fQ.qcNDIgCHJGUs9i1WEQWb3L8RJFlmyVslxC7qIi9-0cM" }
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