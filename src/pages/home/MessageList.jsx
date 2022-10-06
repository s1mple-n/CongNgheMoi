import MessageItem from "./MessageItem";
import SearchForm from "./SearchFrom";
function MessageList(props) {
  return (
    <>
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
        <ul style={{textDecoration:"none",listStyle:'none'}}>
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

   </>
  );
}

export default MessageList;
