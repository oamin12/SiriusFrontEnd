const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "48%",
  height: "75%",
  border: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overFlow: "auto",
  borderRadius: "4%",
  " @media (max-width:820px) ": {
    width: "100% ",
    height: "100%",
    marginTop: "10%",
  },
  " @media (max-width:500px) ": {
    width: "100% ",
    height: "100%",
    marginTop: "10%",
  },
};
const confirmbutton_style = {
  width: "20%",
  height: "10%",
  borderRadius: "300px",
  textTransform: "none",
  fontStyle: "solid 5px ",
  backgroundColor: "black",
  color: "white",

  marginLeft: "8%",
  fontSize: "95%",
  "&:hover": {
    background: "rgb(52, 48, 48)",
  },
};
const calendericon_style = {
  width: "3%",
  height: "3%",
  marginTop: "-38%",
  marginBottom: "0%",
};
const am_pm_style = {
  width: "65%",
  marginLeft: "30%",
};
const months_style = {
  width: "85%",
};
const days_style = {
  width: "55%",
  marginLeft: "30%",
};
const years_style = {
  width: "40%",
  marginLeft: "30%",
};
const hours_style = {
  width: "65%",
};
const minutes_style = {
  width: "65%",
  marginLeft: "15%",
};
const updatebutton_style = {
  width: "25%",
  borderRadius: "300px",
  textTransform: "none",
  fontStyle: "solid 5px ",
  backgroundColor: "black",
  color: "white",
  marginTop: "-3%",
  marginLeft: "8%",
  fontSize: "95%",
  "&:hover": {
    background: "rgb(52, 48, 48)",
  },
  Width: "auto",
};

const clearbutton_style = {
  Width: "auto",
  width: "25%",
  borderRadius: "300px",
  textTransform: "none",
  fontStyle: "solid 5px ",
  backgroundColor: "black",
  color: "white",
  marginTop: "-3%",
  marginLeft: "38%",
  fontSize: "95%",
  "&:hover": {
    backgroundColor: "rgb(52, 48, 48)",
  },
};
const edit_button = {
  width: "15%",
  height: "5%",
  borderRadius: "300px",
  textTransform: "none",
  fontStyle: "solid 5px ",
  backgroundColor: "black",
  color: "white",

  marginLeft: "8%",
  fontSize: "95%",
  "&:hover": {
    background: "rgb(52, 48, 48)",
  },
};
const style1 = {
  minHeight: "110%",
  marginTop: "-2%",
  borderRadius: "4%",
};

export { style };
export { style1 };
export { confirmbutton_style };
export { calendericon_style };
export { am_pm_style };
export { months_style };
export { days_style };
export { hours_style };
export { minutes_style };
export { years_style };
export { clearbutton_style };
export { updatebutton_style };
export { edit_button };
