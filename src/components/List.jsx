import React from "react";

const List = ({ children }) => {
  const UserData = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "safer", age: 30 },
    { id: 3, name: "khan", age: 40 },
  ];
  const child = UserData.map((item) =>
    React.cloneElement(children, { item, key: item.id })
  );
  return <div className="list">{child}</div>;
};

export default List;
