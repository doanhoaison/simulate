import React, { useState } from "react";
import FormInputGroup from "../../../components/FormInputGroup";
import { Formik, Form } from "formik";
import { Button, Intent } from "@blueprintjs/core";
import validationSchema from "./validationSchema";

function FormRegister (props) {

  const [ objUser, setUser ]  = useState({phone: '', pass: '', confirmPass: ''});

  const handleSubmit = (values) => {
    console.log('handleSubmit', values);
    props.onSubmit(values);
  }

    return (
      <>
        <h3>REGISTER</h3>
        <Formik
          initialValues={objUser}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          render={({handleChange, handleBlur}) => {
            return (
              <Form>
                <FormInputGroup
                  label="Phone"
                  name="phone"
                  placeholder="Enter your phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  large
                />
                <FormInputGroup
                  label="Password"
                  name="pass"
                  placeholder="Enter your password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  large
                />
                <FormInputGroup
                  label="Confirm password"
                  name="confirmPass"
                  placeholder="Enter your confirm password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  large
                />

                <Button text="Register" type="submit" intent={Intent.PRIMARY} />
              </Form>
            );
          }}
        />
        </>
    );
}
export default FormRegister;
