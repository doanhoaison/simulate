/**
 *
 * FormInputGroup
 *
 */

import React from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import FormErrorMessage from '../FormErrorMessage';

function FormInputGroup({
  label,
  name,
  placeholder,
  intent,
  type = "text",
  ...rest
}) {
  return (
    <div>
      <FormGroup label={label}>
        <InputGroup
          name={name}
          placeholder={placeholder}
          intent={intent}
          type={type}
          {...rest}
        />
      </FormGroup>
      <FormErrorMessage name={name} />
    </div>
  );
}

FormInputGroup.propTypes = {};

export default FormInputGroup;
