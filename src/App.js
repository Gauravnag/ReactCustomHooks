import { useState } from "react";
import {useFormik} from "formik";
import Validation from "./Validation";

const errorMsg = {
  color: "red",
  marginTop: 0,
}

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
}

const App = () => {
  //  const Formik = useFormik({
   const { handleBlur, handleChange, handleSubmit, values, errors, touched } = useFormik({
      // initialValues: initialValues,
            // OR
      initialValues,

      // For Validation purpose
      validationSchema: Validation,
      onSubmit: (value, action) => {
        // The above "value" is used to the all data, which mention in "initialValues"
        console.log(value)
        // To empty all input Form on click of Submit btn
        action.resetForm();
      }
    });
    // console.log(Formik)
    console.log(errors);
    
    return(
        <>
          <h3>Formik & Yup Form</h3>
          <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fname">First Name </label>
            <input 
              type="text" 
              name="name" 
              placeholder="First Name"
              id="fname"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              { errors.name && touched.name ? (<p style={errorMsg}> {errors.name} </p>) : null }
            </div>

            <div>
            <label htmlFor="email">Email </label>
            <input 
              type="email" 
              name="email"
              placeholder="Email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.email && touched.email ? (<p style={errorMsg}> {errors.email} </p>) : null }
            </div>

            <div>
            <label htmlFor="password">Password </label>
            <input 
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.password && touched.password ? (<p style={errorMsg}> {errors.password} </p>) : null }
            </div>

            <div>
            <label htmlFor="confirm_pass">Confirm Password </label>
            <input 
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              id="confirm_pass"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.confirm_password && touched.confirm_password ? (<p style={errorMsg}> {errors.confirm_password} </p>) : null }
            </div>
            <button type="submit">Submit</button>
          </form>

        </>
    )
}
export default App;