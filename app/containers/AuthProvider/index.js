/**
 *
 * AuthProvider
 *
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import auth from '../../utils/auth';


const WrapperAuth = (WrappedComponent) => (props) => {
  const userInfo = auth.getUserInfo();
  console.log(userInfo);

  return (
    <WrappedComponent userInfo={userInfo} {...props} />
  );
}

WrapperAuth.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
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

// export default compose(withConnect)(WrapperAuth);

let test = compose(withConnect)(WrapperAuth);
console.log('test: ', test);
console.log('typeof test', typeof(test));
export default WrapperAuth;
