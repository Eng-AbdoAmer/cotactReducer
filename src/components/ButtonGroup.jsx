import React from "react";
const ButtonGroup = ({ children }) => {
  const callBackFun = (e) => {
    console.log(e.target.innerText);
  };
  const cloneElements = React.Children.map(children, (child) => {
    const text = child.props.children + " !";
    return React.cloneElement(
      child,
      {
        callBackFun: callBackFun,
        customClasses: "group",
        color: "yellow",
      },
      text
    );
  });
  return <div>{cloneElements}</div>;
};
export default ButtonGroup;
