import React from "react";
import Happyface from "../../images/happyface.png"
function IconMedia(props)
{ 
    return(
  <div  >
  <input type="image" className={props.classname}
      src={props.img} alt={Happyface}/>
 </div>);
}
export default IconMedia