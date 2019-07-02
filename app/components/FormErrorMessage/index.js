/**
 *
 * FormErrorMessage
 *
 */

import React from "react";
import { ErrorMessage } from "formik";
import styled from "styled-components";

function FormErrorMessage({ name }) {
  return (
    <ErrorMessage name={name}>
      {msg => <StyledError>{msg}</StyledError>}
    </ErrorMessage>
  );
}

const StyledError = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 5px;
`;

FormErrorMessage.propTypes = {};

export default FormErrorMessage;
