/**
 *
 * AuthPages
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose, bindActionCreators } from "redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectAuthPages from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

import {
  SUBMIT,
  SUBMIT_ERROR,
  INITIAL_DATA_REGISTER,
  FORM_TYPE_LOGIN,
  FORM_TYPE_REGISTER,
  KEY_APP,
  FORM_TYPE_UPDATE_PROFILE,
} from "./constants";
import { eUserType } from "../enums/EUserType";
import { submit } from "./actions";

import Wrapper from "./styled/Wrapper";
import { Intent } from "@blueprintjs/core";
import Toaster from '../../components/Toaster';

export function AuthPages(props) {
  useInjectReducer({ key: KEY_APP, reducer });
  useInjectSaga({ key: KEY_APP, saga });

  const handleSubmitRegister = dtoObj => {
    props.onSubmit(
      dtoObj,
      FORM_TYPE_REGISTER,
      callbackError,
      callbackSuccess
    );
  };

  const handleSubmitLogin = (dtoObj) => {
    props.onSubmit(
      dtoObj,
      FORM_TYPE_LOGIN,
      callbackError,
      callbackSuccess,
    )
  }

  const callbackError = (errorObj) => {

    Toaster.show({
      message: errorObj.message,
      intent: Intent.DANGER
    });
  };

  const callbackSuccess = messObj => {
    Toaster.show({
      message: messObj.message,
      intent: Intent.SUCCESS
    });
  };

  const renderForm = () => {
    console.log('props.match: ', props.match);
    const { authType } = props.match.params;
    console.log('authType: ', authType);

    switch (authType) {
      case FORM_TYPE_LOGIN:
        return <FormLogin onSubmit={handleSubmitLogin}/>;
      case FORM_TYPE_REGISTER:
        return <FormRegister onSubmit={handleSubmitRegister} />;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <div className="form__content form">{renderForm()}</div>
    </Wrapper>
  );
}

AuthPages.propTypes = {};

const mapStateToProps = createStructuredSelector({
  authPages: makeSelectAuthPages()
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onSubmit: submit
    },
    dispatch
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect
)(AuthPages);
