import React from 'react';
import FormInputGroup from '../../../components/FormInputGroup';

class FormLogin extends React.Component {
    render() {
        return (
            <div>
              <FormInputGroup label="Phone" id="phone"  placeholder="Enter your phone" ></FormInputGroup>
              <FormInputGroup label="Password" id="pass"  placeholder="Enter your password" type="password" ></FormInputGroup>
            </div>
        )
    }
}
export default FormLogin;