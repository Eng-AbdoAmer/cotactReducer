import React from "react";
const Button = ({ color, customClasses, callBackFun, children }) => {
  return (
    <div
      className={`${customClasses ? "button" + customClasses : "button"}`}
      style={{
        color: color,
        background: "gray",
        width: "50px",
        margin: "auto",
      }}
      onClick={(e) => callBackFun(e)}
    >
      {children}
    </div>
  );
};
export default Button;
