import React, { useState } from "react";
import { useFormik } from "formik";

import * as Yup from 'yup';

//.1
const initialValues = {
    name: "",
    email: "",
    password: "",
}
// 2
const onSubmit = (values) => {
    console.log(values)
}
// 3
const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email Format!").required("Email is Required"),
    password: Yup.string().required("Password is Required")
})

const SignUpForm = () => {


  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

//   console.log(formik.errors, formik.touched)


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
              formik.errors && formik.touched.name &&(
                  <div>{formik.errors.name}</div>
              )
          }
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
              formik.errors && formik.touched.email && (
                  <div>{formik.errors.email}</div>
              )
          }
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="text"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
              formik.errors && formik.touched.password && (
                  <div>{formik.errors.password}</div>
              )
          }
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
