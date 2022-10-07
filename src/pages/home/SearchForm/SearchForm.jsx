//component chứa form search phía trên list message và danh bạ

import { Icon } from "@iconify/react";
import "./Searchform.css";
function SearchForm() {
  return (
    <form>
      <div className="search_container">
        <div className="search_gr_input">
          <Icon icon="ant-design:search-outlined" className="search_icon" />
          <input type="text" placeholder="Tìm kiếm" className="search_input" />
        </div>

        <button className="search_btn">
          <Icon icon="bxs:user-plus" className="search_icon" />
        </button>
        <button className="search_btn">
          <Icon
            icon="material-symbols:groups-2-rounded"
            className="search_icon"
          />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
