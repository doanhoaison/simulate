import React from "react";
import FormInputGroup from "../../../components/FormInputGroup";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import Button from "../../../components/Button";
class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Formik
        initialValues={this.state}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log('vallue', values)}
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
              <Button text="Login" large  type="submit" />
            </Form>
          );
        }}
      />
    );
  }
}
export default FormLogin;
