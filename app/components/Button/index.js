/**
 *
 * Button
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import StyledButton from './StyledButton';

function CommonButton({ text, ...rest }) {
  return (
    <React.Fragment>
      <StyledButton text={text} {...rest} />
    </React.Fragment>
  );
}

// Button.propTypes = {};

export default CommonButton;
