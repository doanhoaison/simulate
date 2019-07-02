/**
 *
 * FormInputGroup
 *
 */

import React from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";

function FormInputGroup({ label, id, placeholder, intent }) {
  return (
    <FormGroup label={label}>
      <InputGroup id={id} placeholder={placeholder} intent={intent} />
    </FormGroup>
  );
}

FormInputGroup.propTypes = {};

export default FormInputGroup;
