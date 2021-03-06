/**
 *
 * Header
 *
 */

import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { Alignment, Navbar, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectHeader from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import StyledHeader from "./styled/StyledHeader";
import AuthButton from './AuthButton';

export function Header(props) {
  // useInjectReducer({ key: "header", reducer });
  // useInjectSaga({ key: "header", saga });
  console.log(" header props: ", props);

  return (
    <StyledHeader>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <Link to="/">
            <Button className="bp3-minimal" icon="home" text="Home" />
          </Link>
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <AuthButton userInfo={props.userInfo}  onLogout={props.onLogout}/>
        </Navbar.Group>
      </Navbar>
    </StyledHeader>
  );
}

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(Header);
