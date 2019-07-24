import React from "react";
import { Button, Menu, MenuItem, Icon } from "@blueprintjs/core";
import { Link } from "react-router-dom";

function AuthButton(props) {
  const { userInfo } = props;

  if (userInfo) {
    return (
      <Menu>
        <MenuItem icon="user" />
      </Menu>
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
