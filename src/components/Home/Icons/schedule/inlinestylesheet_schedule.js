
const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "48%",
    height:"75%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overFlow: 'auto',
    borderRadius: '4%',
  };
  const confirmbutton_style={
  width: "15%",
  height: "10%",
  marginLeft:"85%",
  marginTop:"-10%",
  borderRadius:"300px",
  textTransform: "lowercase",
  fontStyle:"solid 5px ",
  backgroundColor:"black",
  color:"white",
  fontSize: "95%",
  "&:hover": {
    background: "rgb(52, 48, 48)"
  },
  }
  const calendericon_style=
  {
       marginLeft:"-2.5%",
        width: "5%",
        height: "5%",
  }
  const am_pm_style=
  {
    width:'25%',
    marginLeft:'70%',
    marginTop:'-12%',
  }
  const months_style=
  {
    width:'30%',
    marginTop:'1%',
  }
  const days_style=
  {
    width:'15%',
    marginLeft:'40%',
    marginTop:'-9%',
  }
  const years_style=
  {
    width:'20%',
    marginLeft:'70%',
    marginTop:'-12.5%',
  }
  const hours_style=
  {
    width:'25%',
  }
  const minutes_style=
  {
    width:'25%',
    marginLeft:'35%',
    marginTop:'-8.5%',
  }
  const updatebutton_style={
    width: "15%",
    height: "10%",
    marginLeft:"85%",
    marginTop:"-15%",
    borderRadius:"300px",
    textTransform: "lowercase",
    fontStyle:"solid 5px ",
    backgroundColor:"black",
    color:"white",
    fontSize: "95%",
    "&:hover": {
    background: "rgb(52, 48, 48)"
    },
  }
const clearbutton_style=
{
width: "15%",
height: "10%",
marginLeft:"65%",
marginTop:"-8%",
borderRadius:"300px",
background:'none',
textTransform: "lowercase",
fontStyle:"solid 5px ",
backgroundColor:'transperent',
color:"black",
fontSize: "95%",
"&:hover": {
  background: "rgb(202,202, 202)"
},
}
export{ style}
export {confirmbutton_style}
export {calendericon_style}
export {am_pm_style}
export {months_style}
export {days_style}
export {hours_style}
export {minutes_style}
export {years_style}
export {clearbutton_style}
export {updatebutton_style}