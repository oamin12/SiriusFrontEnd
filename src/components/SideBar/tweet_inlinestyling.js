const tweet_popup_page = {
  width: "50%",
  marginTop: "0%",
  marginLeft: "25%",
  borderRadius: "4%",
};
const unsenttweet_button = {
  width: "40%",
  height: "4%",
  borderRadius: "300px",
  color: "rgb(29, 161, 242)",
  marginLeft: "70%",
  marginTop: "-5%",
  textTransform: "none",
  fontWeight: "bold",
  fontFamily:
    '"Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", sans-serif',
  "&:hover": {
    backgroundColor: "#DAEBFF",
  },
};
const save_discard_popup_page = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25%",
  height: "45%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overFlow: "auto",
  borderRadius: "4%",
};

const saveButton = {
  width: "80%",
  height: "20%",
  borderRadius: "300px",
  textTransform: "lowercase",
  fontStyle: "solid 5px ",
  backgroundColor: "black",
  color: "white",
  marginTop: "10%",
  marginLeft: "8%",
  fontSize: "95%",
  "&:hover": {
    backgroundColor: "rgb(52, 48, 48)",
  },
};
const discardButton = {
  width: "80%",
  height: "20%",
  borderRadius: "300px",
  textTransform: "lowercase",
  fontStyle: "solid 5px ",
  border: "1px solid ",
  color: "black",
  marginTop: "10%",
  marginLeft: "8%",
  fontSize: "95%",
  borderColor: "black",
  "&:hover": {
    backgroundColor: "#DBDCDE",
  },
};
const heading1_savediscard_popuppage = {
  fontSize: "120%",
  fontFamily:
    '"Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", sans-serif',
};

const heading2_savediscard_popuppage = {
  marginTop: "2",
  fontSize: "90%",
  fontFamily:
    '"Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", sans-serif',
  fontWeight: "lighter",
  color: "rgb(115, 115, 115)",
};
export { tweet_popup_page };
export { unsenttweet_button };
export { saveButton };
export { discardButton };
export { save_discard_popup_page };
export { heading2_savediscard_popuppage };
export { heading1_savediscard_popuppage };
