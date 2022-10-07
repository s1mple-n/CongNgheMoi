import "./Chatbox.css";
import {
  faImage,
  faPaperPlane,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Icon } from "@iconify/react";
// import Infor from "./Infor";

function Chatbox(props) {
  const [formIsValid, setFormIsValid] = useState(false);
  const [enterMessage, setEnterMessage] = useState();

  function messageChangeHandle(event) {
    setEnterMessage(event.target.value);
    setFormIsValid(event.target.value.trim().length > 0);
  }
  return (
    <div className="chatbox_container">
      <div className="chatbox_top">
        <div className="chatbox_top_left">
          <img
            className="chatbox_top_left_avt"
            src="../images/avt.jpg"
            alt=""
          />
          <h3>Nguyen van A</h3>
        </div>
        <div className="chatbox_top_right">
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon
            className="chatbox_top_right_favideo"
            icon={faVideo}
          />
          <FontAwesomeIcon
            icon={faSquarePlus}
            className="chatbox_top_right_fasq"
          />
        </div>
      </div>
      <div className="chatbox_session"></div>
      <div className="chatbox-bottom">
        <button>
          <Icon icon="fluent:sticker-add-20-regular" className="icon" />
        </button>
        <textarea
          className="chatbox-bottom_input"
          placeholder="Nhập tin nhắn"
          value={enterMessage}
          onChange={messageChangeHandle}
        />
        <button type="submit">
          <FontAwesomeIcon
            icon={formIsValid ? faPaperPlane : faImage}
            className="icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
