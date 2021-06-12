import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

function List({ children }) {
  return (
    <div id="wrapper">
      <div class="scrollbar" id="style-15">
        <div className="force-overflow" style={{ maxHeight: "40vh" }}>
          <ul className="list-group">{children}</ul>
        </div>
      </div>
    </div>
  );
}

export default List

function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
export {
  List,
  ListItem
}