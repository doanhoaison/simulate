/**
 *
 * AuthProvider
 *
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose, bindActionCreators } from "redux";

import auth from '../../utils/auth';
import { makeSelectUserInfo } from '../Page/selectors';
import { setUserInfo } from '../Page/actions';

const WrapperAuth = (WrappedComponent) => (props) => {
  useEffect(() => {
    const userInfo = auth.getUserInfo();

    if(userInfo) {
      props.setUserInfo(userInfo);
    }
  }, []);



  return (
    <WrappedComponent {...props} />
  );
}

WrapperAuth.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  userInfo: makeSelectUserInfo(),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setUserInfo
}, dispatch)

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const AuthProvider = compose(
  withConnect,
  WrapperAuth,
)

export default AuthProvider;

