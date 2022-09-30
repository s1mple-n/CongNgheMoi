import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhonebookItem from "./PhonebookItem";
import Chatbox from "./Chatbox";
import SearchForm from "./SearchFrom";
function Phonebook(props) {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          width: "30%",
          height: "100vh",
          flex: "0 1 auto",
          borderRight: "1px solid black",
          overflowY: "auto",
          
        }}
      >
       <SearchForm />
       <div style={{ borderBottom: "1px solid black",}}>
            <button
              style={{
                margin:"10px"
              }}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Them ban be bang so dien
              thoai
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
      <Chatbox />
    </div>
  );
}

export default Phonebook;
