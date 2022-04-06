import React from "react";

const Image = ({ id, img, text }) => {
  return <img className={id} src={img} alt={text} />;
};
export default Image;
