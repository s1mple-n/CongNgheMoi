// component chứa danh bạ và chatbox, load dữ liệu vào mảng listpb để render tạm thời

import Chatbox from "../Chatbox/Chatbox";
import Phonebook from "../Phonebook/Phonebook";
import Logo from "../images/avt.jpg";

const listpb = [
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van b",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van c",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van d",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van e",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van e",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van f",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van g",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van h",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van a",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van i",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van j",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van k",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van l",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van m",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van n",
    image: "./images/avt.jpg",
  },
  {
    name: "nguyen van r",
    image: "./images/avt.jpg",
  },
];
function PhoneBookContainer() {
  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "row" }}>
      <Phonebook items={listpb} />
      <Chatbox avt={Logo} name="sirrr" />
    </div>
  );
}

export default PhoneBookContainer;
