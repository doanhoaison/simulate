/**
 *
 * FormInputGroup
 *
 */

import React from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import { ErrorMessage } from 'formik';

function FormInputGroup({ label, id, placeholder, intent, type="text", ...rest }) {
  return (
    <FormGroup label={label}>
      <InputGroup id={id} placeholder={placeholder} intent={intent}  type={type} { ...rest}/>
      <ErrorMessage name={id} />
    </FormGroup>
  );
}

FormInputGroup.propTypes = {};

export default FormInputGroup;
