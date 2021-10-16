import React from "react";
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <Link to="/">ホーム</Link>

      <Link to="/about">概要</Link>

      <Link to="/rule">ルール</Link>

      <Link to="/performers">参加者一覧</Link>
    </Menu>
  );
};