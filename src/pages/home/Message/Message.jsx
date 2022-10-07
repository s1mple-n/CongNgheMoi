import "./Message.css";

function Message(props) {
  return (
    <>
      <div className="message_container">
        <img src={props.avt} alt="" className="message_avt" />
        <div className="message_content">
          <p>{props.message}</p>
          <p>{props.hour}</p>
        </div>
      </div>
    </>
  );
}

export default Message;
