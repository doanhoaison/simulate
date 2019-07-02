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
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectAuthPages from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import { LOGIN, REGISTER } from "./constants";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

import Wrapper from './styled/Wrapper';

export class AuthPages extends React.Component {
  // useInjectReducer({ key: "authPages", reducer });
  // useInjectSaga({ key: "authPages", saga });

  renderForm = () => {
    const { authType } = this.props.match.params;
    console.log('authType',authType );

    switch (authType) {
      case LOGIN:
        return <FormLogin />;
      case REGISTER:
        return <FormRegister />;
      default:
        break;
    }
  };

  render() {
    console.log('authPages');
    return (
      <Wrapper>
        {this.renderForm()}
      </Wrapper>
    );
  }
}

AuthPages.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  authPages: makeSelectAuthPages()
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

export default compose(withConnect)(AuthPages);
