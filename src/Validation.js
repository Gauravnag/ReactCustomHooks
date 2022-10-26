import * as Yup from "yup";

const Validation = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter name"),
    email: Yup.string().email().required("Please enter email"),
    password: Yup.string().min(6).required("Please enter password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match")
});
export default Validation;