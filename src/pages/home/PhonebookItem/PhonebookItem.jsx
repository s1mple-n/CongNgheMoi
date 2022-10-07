import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PhonebookItem.css";
import { useState } from "react";
function PhonebookItem(props) {
  // component để load 1 liên hệ trong danh bạ
  const [style, setStyle] = useState({ display: "none" });
  return (
    <li
      className="phonebook_items"
      onMouseEnter={(e) => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
    >
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
        <div className="a" style={{ display: "flex", flexDirection: "row" }}>
          <h3 style={{ padding: "20px" }}>{props.name}</h3>

          <button className="detail" style={style}>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default PhonebookItem;
