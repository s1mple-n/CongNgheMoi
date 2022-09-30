import MessageItem from "./MessageItem";
import SearchForm from "./SearchFrom";
import Chatbox from "./Chatbox";
function MessageList(props) {
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
        <div style={{ borderBottom: "1px solid black" }}>
          <SearchForm />
        </div>

        <div>
          <ul>
            {props.items.map((messageItem) => (
              <MessageItem
                key={Math.random()}
                message={messageItem.message}
                image={messageItem.image}
                name={messageItem.name}
              />
            ))}
          </ul>
        </div>
      </div>
      <Chatbox />
    </div>
  );
}

export default MessageList;
