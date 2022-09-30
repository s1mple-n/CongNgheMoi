import { faUserGroup, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SearchForm(){
    return <form>
    <div
      className="form-row"
      style={{ padding: "10px 20px" }}
    >
      <input type="text" placeholder="Tìm kiếm" />
      <button style={{ marginLeft: "20px", backgroundColor: "white" }}>
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
      <button style={{ marginLeft: "20px", backgroundColor: "white" }}>
        <FontAwesomeIcon icon={faUserGroup} />
      </button>
    </div>
  </form>
}

export default SearchForm;