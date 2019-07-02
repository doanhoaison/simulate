/**
 *
 * Button
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from "@blueprintjs/core";

function CommonButton({ text, ...rest }) {
  return (
    <React.Fragment>
      <Button text={text} {...rest} />
    </React.Fragment>
  );
}

Button.propTypes = {};

export default CommonButton;
