import Chatbox from "./Chatbox";

import MessageList from "./MessageList";
const listms = [
    {
      name: "nguyen van a",
      image: "./images/avt.jpg",
      message: "chat a",
    },
    {
      name: "nguyen van b",
      image: "./images/avt.jpg",
      message: "chat b",
    },
    {
      name: "nguyen van c",
      image: "./images/avt.jpg",
      message: "chat c",
    },
    {
      name: "nguyen van d",
      image: "./images/avt.jpg",
      message: "chat d",
    },
    {
      name: "nguyen van e",
      image: "./images/avt.jpg",
      message: "chat e",
    },
    {
      name: "nguyen van e",
      image: "./images/avt.jpg",
      message: "chat e",
    },
    {
      name: "nguyen van a",
      image: "./images/avt.jpg",
      message: "chat a",
    },
    {
      name: "nguyen van f",
      image: "./images/avt.jpg",
      message: "chat f",
    },
    {
      name: "nguyen van g",
      image: "./images/avt.jpg",
      message: "chat g",
    },
    {
      name: "nguyen van h",
      image: "./images/avt.jpg",
      message: "chat h",
    },
    {
      name: "nguyen van a",
      image: "./images/avt.jpg",
      message: "chat a",
    },
    {
      name: "nguyen van i",
      image: "./images/avt.jpg",
      message: "chat i",
    },
    {
      name: "nguyen van j",
      image: "./images/avt.jpg",
      message: "chat j",
    },
    {
      name: "nguyen van k",
      image: "./images/avt.jpg",
      message: "chat k",
    },
    {
      name: "nguyen van l",
      image: "./images/avt.jpg",
      message: "chat l",
    },
    {
      name: "nguyen van m",
      image: "./images/avt.jpg",
      message: "chat m",
    },
    {
      name: "nguyen van n",
      image: "./images/avt.jpg",
      message: "chat n",
    },
    {
      name: "nguyen van r",
      image: "./images/avt.jpg",
      message: "chat r",
    },
  ];
function ChatContainer(){
    return <div style={{ display: "flex", width: "100%" }}>
        <MessageList items={listms} />
        <Chatbox />
        
    </div>
}

export default ChatContainer;