import React from "react";
import ListItem from "./ListItem";
import "./style.css";

const List = ({ list }) => (
  <div className="list">
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>
);

export default List;
