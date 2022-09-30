import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../images/avt.jpg";
import MessageList from "./MessageList";
import { useState } from "react";
import "./Sidebar.css";
import Phonebook from "./Phonebook";

const listms = [
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
    message: "chat a",
  },
];

function Sidebar() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="sidebarr"
        style={{
          border: "1px solid",
          height: "100vh",
          width: "5%",
          backgroundColor: "#0091ff",
          flexGrow: 0,
        }}
      >
        <img
          src={Logo}
          alt=""
          style={{ width: "50px", borderRadius: "50%", margin: "10px" }}
        ></img>
        <ul className="tab-bloc">
          <li>
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
              style={{ width: "84%",height:"50px" }}
            >
              {" "}
              <FontAwesomeIcon icon={faMessage} />{" "}
            </button>
          </li>
          <li>
            <button
              style={{ width: "84%",height:"50px" }}
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              {" "}
              <FontAwesomeIcon icon={faUser} />
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-contents" style={{width: '95%'}}>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
          
        >
          <MessageList items={listms} />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Phonebook items={listms} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
