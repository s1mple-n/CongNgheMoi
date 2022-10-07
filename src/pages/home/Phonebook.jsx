import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhonebookItem from "../home/PhonebookItem/PhonebookItem";
import Chatbox from "../home/Chatbox/Chatbox";
import SearchForm from "./SearchFrom";
function Phonebook(props) {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          width: "25%",
          height: "100vh",
          flex: "0 1 auto",
          borderRight: "1px solid #eeeff2",
          overflowY: "auto",
        }}
      >
        <div style={{ height: "15%" }}>
          <SearchForm />
          <div style={{ borderBottom: "1px solid #eeeff2" }}>
            <button
              style={{
                margin: "1%",
              }}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Them ban be bang so dien
              thoai
            </button>
          </div>
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
      <Chatbox />
    </div>
  );
}

export default Phonebook;
