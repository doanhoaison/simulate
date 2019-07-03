import React from "react";
import FormInputGroup from "../../../components/FormInputGroup";
import { Formik, Form } from "formik";
import { Button, Intent } from "@blueprintjs/core";
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
      <>
        <h3>REGISTER</h3>
        <Formik
          initialValues={this.state}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
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
}
export default FormRegister;
