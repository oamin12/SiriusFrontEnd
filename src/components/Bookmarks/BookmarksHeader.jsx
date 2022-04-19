import React from "react";
import "./BookmarksHeader.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Popover } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import tweets from "./BookmarkedTweets";
import ReactDOM from "react-dom";
import App from "../App";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

function BookmarksHeader(props) {
  const [open, setOpen] = React.useState(null);

  function handleClick(event) {
    setOpen(event.currentTarget);
  }
  function handleClose() {
    setOpen(null);
  }
  const [openModal, setOpenModal] = React.useState(false);
  function handleClearButtonClick() {
    setOpenModal(true);
  }
  function handleModalClose() {
    setOpenModal(false);
  }
  function handleClearLinkClick() {
    while (tweets.length > 0) {
      tweets.pop();
    }
    handleModalClose();
    handleClose();
    props.handleFunction();
    ReactDOM.render(<App flag={1} />, document.getElementById("root"));
    console.log(tweets);
  }
  function handleCancelButtonClick() {
    handleModalClose();
    handleClose();
  }

  return (
    <div className="bookmarkHeader">
      <div className="headerText">
        <h2>{props.name}</h2>
        <h3>{props.username}</h3>
      </div>
      <button className="bookmarkMoreButton" onClick={handleClick}>
        <MoreHorizIcon />
      </button>
      <Popover
        style={{
          width: "20%",
          height: "200px",
        }}
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <button className="clearButton" onClick={handleClearButtonClick}>
          Clear all Bookmarks
        </button>
        <Modal open={openModal} onClose={handleModalClose}>
          <Box sx={style}>
            <h3 className="modalHeader">Clear all Bookmarks?</h3>
            <p className="boxParagraph">
              This can't be undone and you'll remove all Tweets you've added to
              your Bookmarks.
            </p>

            <button className="clearLink" onClick={handleClearLinkClick}>
              clear
            </button>
            <button className="cancelButton" onClick={handleCancelButtonClick}>
              Cancel
            </button>
          </Box>
        </Modal>
      </Popover>
    </div>
  );
}

export default BookmarksHeader;
