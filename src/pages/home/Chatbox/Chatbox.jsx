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
import Infor from "../Infor/Infor";
import Avt from "../images/avt.jpg";
import Message from "../Message/Message";
const Messages =
  "ReactJS là thư viện JavaScript front-end phổ biến nhất trong lĩnh vực phát triển web, hay còn được gọi là React. React được tạo ra để xây dựng giao diện người dùng nhanh và tương tác cho các ứng dụng web và di động.";
function Chatbox(props) {
  const [formIsValid, setFormIsValid] = useState(false);
  const [enterMessage, setEnterMessage] = useState();

  function messageChangeHandle(event) {
    setEnterMessage(event.target.value);
    setFormIsValid(event.target.value.trim().length > 0);
  }
  const [show, toggleShow] = useState(false);
  const [btnstate, setBtnstate] = useState(false);
  function handleClick() {
    setBtnstate((btnstate) => !btnstate);
    toggleShow(!show);
  }
  let toggleClasscheck = btnstate ? "active" : null;
  return (
    // component dùng để chứa khung chat và infor

    <div className="chatbox_infor_container">
      <div className="chatbox_container">
        <div className="chatbox_top">
          <div className="chatbox_top_left">
            {/* Load ảnh đại diện  thằng đang chat vào đây */}
            <img className="chatbox_top_left_avt" src={props.avt} alt="" />
            {/* Load tên thằng đang chat vào đây */}
            <h3>{props.name}</h3>
          </div>
          <div className="chatbox_top_right">
            {/* gọi thoại */}
            <button>
              <FontAwesomeIcon icon={faPhone} />
            </button>
            {/* gọi video */}
            <button>
              <FontAwesomeIcon
                className="chatbox_top_right_favideo"
                icon={faVideo}
              />
            </button>
            {/* button hiển thị component Infor bên phải khi click */}
            <button onClick={handleClick}>
              <FontAwesomeIcon
                icon={faSquarePlus}
                className={`chatbox_top_right_fasq ${toggleClasscheck}`}
              />
            </button>
          </div>
        </div>
        {/* hiển thị các message khi chat */}
        <div className="chatbox_session">
          <Message message={Messages} hour="19:45" send="2" />
          <Message message="hello world" hour="19:45" send="1" />
          <Message message="hello world" hour="19:45" send="2" />
          <Message message={Messages} hour="19:45" send="1" />
        </div>

        <div className="chatbox-bottom">
          {/* button thả icon */}
          <button>
            <Icon icon="fluent:sticker-add-20-regular" className="icon" />
          </button>
          {/* nhập tin nhắn ở đây */}
          <textarea
            className="chatbox-bottom_input"
            placeholder="Nhập tin nhắn"
            value={enterMessage}
            onChange={messageChangeHandle}
          />
          {/* button gửi ảnh nếu chưa nhập tin nhắn, chuyển thành button gửi tin nhắn khi đã nhập */}
          <button type="submit">
            <FontAwesomeIcon
              icon={formIsValid ? faPaperPlane : faImage}
              className="icon"
            />
          </button>
        </div>
      </div>
      {show && <Infor avt={Avt} name="a" countgr="2" />}
    </div>
  );
}

export default Chatbox;
