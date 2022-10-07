import React from "react";
import "./ContactItem.css";
function ContactItem(props) {
  // component để load 1 cuộc hội thoại
  return (
    <li className="msItems">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
          <img
            src={props.image}
            alt=""
            style={{
              width: "50px",
              borderRadius: "50%",
              marginLeft: "20px",
            }}
          />
        </div>
        <div
          className="a"
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <h3>{props.name}</h3>

          <p>{props.message}</p>
        </div>
      </div>
    </li>
  );
}

export default ContactItem;
