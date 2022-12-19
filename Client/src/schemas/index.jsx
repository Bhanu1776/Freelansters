import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required('Please Enter your name'),
    email: Yup.string().email().required('Please Enter your email'),
    phone: Yup.string().min(10).max(13).required('Please Enter your number'),
    password: Yup.string().min(8).required('Please Enter your Password'),
    cpassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match")
})