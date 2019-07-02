import * as Yup from "yup";

export default () => {
  return Yup.object().shape({
    phone: Yup.string().required(),
    password: Yup.string().required(),
    confirmPass: Yup.string().required(),
  });
};
