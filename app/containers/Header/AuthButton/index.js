import React from "react";
import { Button, Menu, MenuItem, Icon, Popover } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const listMenu = [{ icon: "user", text: "User profile" }];

const Content = (props) => (
  <Menu>
    {listMenu.map(item => (
      <MenuItem text={item.text} icon={item.icon} />
    ))}
    <MenuItem text={"log-out"} icon={"log-out"} onClick={props.onLogout} />
  </Menu>
);

function AuthButton(props) {
  const { userInfo } = props;
  if (userInfo) {
    return (
      <Popover content={<Content onLogout={props.onLogout} />}>
        <Button icon={"user"} minimal />
      </Popover>
    );
  }
  return (
    <>
      <Link to="/auth/register">
        <Button className="bp3-minimal" text="Register" />
      </Link>
      <Link to="/auth/log-in">
        <Button className="bp3-minimal" text="Log-in" />
      </Link>
    </>
  );
}

export default AuthButton;
