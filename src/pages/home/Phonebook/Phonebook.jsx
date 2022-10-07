//component render danh bạ
import PhonebookItem from "../PhonebookItem/PhonebookItem";
import SearchForm from "../SearchForm/SearchForm";
import { Icon } from "@iconify/react";
import "./Phonebook.css";
function Phonebook(props) {
  return (
    <div className="phonebook_container">
      <div className="pb_top">
        <SearchForm />

        <button className="btn_them">
          <Icon className="icon_them" icon="bxs:user-plus" /> Them ban be bang
          so dien thoai
        </button>
      </div>
      <div>
        <ul>
          {props.items.map((phonebookItem) => (
            <PhonebookItem
              key={Math.random()}
              image={phonebookItem.image}
              name={phonebookItem.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Phonebook;
