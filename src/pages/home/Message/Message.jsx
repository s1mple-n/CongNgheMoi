import "./Message.css";
function Message(props) {
  return (
    <>
      <div className={props.send === "1" ? "right" : "left"}>
        <div className="message_container">
          <div className="message_content">
            <p>{props.message}</p>
            <p>{props.hour}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
