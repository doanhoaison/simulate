import React, { useState } from "react";
import FormInputGroup from "../../../components/FormInputGroup";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import Button from "../../../components/Button";

function FormLogin(props) {
  const [ objUser, setUser] = useState({phone: '', pass: ''});

  const handleSubmit = values => {
    props.onSubmit(values);
  };

  return (
    <Formik
      initialValues={objUser}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      render={({ handleChange, handleBlur }) => {
        return (
          <Form>
            <FormInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter your phone"
              large
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormInputGroup
              label="Password"
              name="pass"
              placeholder="Enter your password"
              type="password"
              large
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button text="Login" large type="submit" />
          </Form>
        );
      }}
    />
  );
}
export default FormLogin;
