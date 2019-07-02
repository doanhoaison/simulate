import React from "react";
import FormInputGroup from "../../../components/FormInputGroup";
import { Formik, Form } from "formik";
import { Button } from "@blueprintjs/core";
import validationSchema from "./validationSchema";

class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      pass: "",
      confirmPass: ""
    };
  }
  render() {
    return (
      <div>
        <Formik
          initialStatus={this.state}
          validationSchema={validationSchema}
          render={({values, handleChange, handleBlur, handleSubmit, errors}) => {
            console.log("values: ", values);
            return (
              <Form>
                <FormInputGroup
                  label="Phone"
                  id="phone"
                  placeholder="Enter your phone"
                  onChange={handleChange}
                  onBlue={handleBlur}
                  large
                />
                <FormInputGroup
                  label="Password"
                  id="pass"
                  placeholder="Enter your password"
                  type="password"
                  onChange={handleChange}
                  onBlue={handleBlur}
                  large
                />
                <FormInputGroup
                  label="Confirm password"
                  id="confirmPass"
                  placeholder="Enter your confirm password"
                  type="password"
                  large
                />

                <Button text="Register" type="submit" large />
              </Form>
            );
          }}
        />
      </div>
    );
  }
}
export default FormRegister;
