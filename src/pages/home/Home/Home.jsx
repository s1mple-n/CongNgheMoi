import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../images/avt.jpg";
import React, { useState } from "react";
import "./Home.css";
import ChatContainer from "../ChatContainer/ChatContainer";
import PhoneBookContainer from "../PhonebookContainer/PhoneBookContainer";

function Home() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="home_container">
      {/* Sidebar làm theo dạng tab */}
      <div className="sidebarr">
        {/* Load avt của thằng đăng nhập vào đây, click vào hiện ra modal thông tin */}
        <img className="home_avt" src={Logo} alt="" />
        <ul className="tab-bloc">
          <li>
            {/* Option 1: chat */}
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
              style={{ width: "100%", height: "50px", padding: "0" }}
            >
              {" "}
              <FontAwesomeIcon icon={faMessage} />{" "}
            </button>
          </li>
          <li>
            {/* Option 1: Danh bạ */}
            <button
              style={{ width: "100%", height: "50px", padding: "0" }}
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              {" "}
              <FontAwesomeIcon icon={faUser} />
            </button>
          </li>
        </ul>
      </div>
      {/* đây là phần content của 2 option ở trên */}
      <div className="tab-contents" style={{ width: "95%" }}>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <ChatContainer />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <PhoneBookContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
