import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./Modalinfor.module.css";

const Modalinfor = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h3>Thông tin tài khoản</h3>
        </header>
        <div className={classes.content}>
          <div>
            <img src="./images/bg.jpg" alt="" className={classes.bg} />
          </div>
        </div>
        <footer className={classes.actions}>
          <Button>Đăng xuất</Button>
          <Button>Cập nhật</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modalinfor;
