import { faBell, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faThumbTack, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Infor.css";
function Infor(props) {
  return (
    // component hiển thị thông tin hội thoại khi click button trong component Chatbox.jsx
    <>
      <div className="i4_container">
        <div className="i4_header">
          <h3>Thông tin hội thoại</h3>
        </div>
        <div className="i4_top">
          {/* Load ảnh của thằng đang chat với mình vào đây */}
          <img src={props.avt} alt="" />
          {/* Load tên của thằng đang chat với mình vào đây */}
          <p>{props.name}</p>

          <div className="gr-btn">
            <div className="gr-btn_child">
              <button>
                <FontAwesomeIcon icon={faBell} />
              </button>
              <p>
                Tắt thông <br /> báo
              </p>
            </div>
            <div className="gr-btn_child">
              <button>
                <FontAwesomeIcon icon={faThumbTack} />
              </button>
              <p>
                Ghim hội <br /> thoại
              </p>
            </div>
            <div className="gr-btn_child">
              <button>
                <FontAwesomeIcon icon={faUserGroup} />
              </button>
              <p>Tạo nhóm trò chuyện</p>
            </div>
          </div>
        </div>
        {/* Đếm số nhóm chung của 2 thằng đang chat, nếu là nhóm thì ẩn phần này đi*/}
        <div className="count_gr">
          <FontAwesomeIcon icon={faUserGroup} className="icongr" />
          <p>{props.countgr} nhóm chung</p>
        </div>
        {/* Kho lưu trữ ảnh video file */}
        <div className="i4_bottom">
          <div className="i4_img_vid">
            <h4>Ảnh/video</h4>
            <div className="container_data">{/* dùng để hiển ảnh/video */}</div>
            <button className="btnxemtt">Xem tất cả</button>
          </div>
          <div className="i4_file">
            <h4>File</h4>
            <div className="container_data">
              {/* dùng để hiển thị ảnh/video */}
            </div>
            <button className="btnxemtt">Xem tất cả</button>
          </div>
        </div>

        <div className="i4_trash">
          {/* btn dùng để xóa cuộc trò chuyện */}
          <button>
            <FontAwesomeIcon icon={faTrashCan} /> Xóa lịch sử trò chuyện
          </button>
        </div>
      </div>
    </>
  );
}

export default Infor;
