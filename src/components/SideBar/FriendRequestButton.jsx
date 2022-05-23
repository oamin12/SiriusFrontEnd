import React from "react";
import "./Icon.css";
import "./FriendRequestButton.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import FriendRequestCard from "./FriendRequestCard";
import getFriendRequests from "./FriendRequests";
import axios from "axios";

function FriendRequestButton() {
  const [requests, setRequests] = React.useState([]);

  var token = sessionStorage.getItem("tokenValue");
  async function getFriendRequests() {
    var config = {
      method: "get",
      headers: { Authorization: "Bearer " + token },
    };
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/home/Follow-requests", config)
        .then((res) => res.data.usersArr);
      setRequests(response);
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

  React.useEffect(() => {
    (async () => {
      const resp = await getFriendRequests();
    })();
  }, []);
  //-----------------------Handling reject button-------------------//
  const [index, setIndex] = React.useState(-1);
  function HandleIndex(val) {
    setIndex(val);
  }
  function HandleBan() {
    var config = {
      method: "delete",
      headers: { Authorization: "Bearer " + token },
    };
    for (let i = 0; i < requests.length; i++) {
      if (requests[i]._id == index) {
        (async () => {
          await axios.delete(
            "http://34.236.108.123:3000/home/Follow-requests/reject",
            {
              data: { id: index },
              headers: { Authorization: "Bearer " + token },
            }
          );
          const resp = await getFriendRequests();
        })();
        setIndex(-1);
        break;
      }
    }
  }
  HandleBan();

  //-----------------------------------------------------------//
  //---------------------handling accept button---------------//

  const [acceptIndex, setAcceptIndex] = React.useState(-1);
  function HandleAccept() {
    var config = {
      method: "post",
      headers: { Authorization: "Bearer " + token },
    };
    for (let i = 0; i < requests.length; i++) {
      if (requests[i].username == acceptIndex) {
        // post request
        (async () => {
          await axios.post(
            "http://34.236.108.123:3000/home/Follow-requests/accept",
            { username: acceptIndex },
            config
          );
          const resp = await getFriendRequests();
          //setRequests(resp);
        })();
        setAcceptIndex(-1);
        break;
      }
    }
  }
  HandleAccept();
  //----------------------------------------------------------//
  //------------------mapping function--------------//
  function mapRequests(requests) {
    return (
      <FriendRequestCard
        key={requests._id}
        id={requests._id}
        userName={requests.username}
        profilePic={requests.image}
        HandleIndex={HandleIndex}
        setAcceptIndex={setAcceptIndex}
      />
    );
  }
  //-----------------------------------------------//

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    bgcolor: "background.paper",
    border: "0px",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    overflowY: "scroll",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="icon">
        <GroupAddOutlinedIcon />
        <h3
          style={{ textAlign: "left", fontWeight: "100", marginLeft: "20px" }}
        >
          Follow  requests
        </h3>
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h3 style={{ marginBottom: "10px" }}>Friend Requests</h3>
          {requests.map(mapRequests)}
        </Box>
      </Modal>
    </div>
  );
}
export default FriendRequestButton;
//pass a component as a prop
