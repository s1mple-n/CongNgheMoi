import { faBell, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faThumbTack, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Infor.css";
function Infor(props) {
  return (
    <>
      <div className="i4_container">
        <div className="i4_header">
          <h3>Thông tin hội thoại</h3>
        </div>
        <div className="i4_top">
          <img src={props.avt} alt="" />
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
        <div className="count_gr">
          <FontAwesomeIcon icon={faUserGroup} className="icongr" />
          <p>1 nhóm chung</p>
        </div>
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
          <button>
            <FontAwesomeIcon icon={faTrashCan} /> Xóa lịch sử trò chuyện
          </button>
        </div>
      </div>
    </>
  );
}

export default Infor;
