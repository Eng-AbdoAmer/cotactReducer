import React from "react";

const ShapOne = ({ item }) => {
  return (
    <div className="shapOne">
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
};
export default ShapOne;
