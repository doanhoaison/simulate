import * as Yup from "yup";

export default () => {
  return Yup.object().shape({
    phone: Yup.string().required(),
    pass: Yup.string().required(),
    confirmPass: Yup.string().required(),
  });
};
