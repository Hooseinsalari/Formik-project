import React, { useState } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";

//.1
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};
// 2
const onSubmit = (values) => {
  console.log(values);
};
// 3
const validationSchema = Yup.object({
  name: Yup.string().min(4).required("Name is Required"),
  email: Yup.string()
    .email("Invalid Email Format!")
    .required("Email is Required"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number")
    .nullable(),
  password: Yup.string()
    .min(8, "should be 8 chars minimum")
    .max(16, "should be 16 chars maximum")
    .required("Password is Required"),
  confirmPassword: Yup.string().required("confirm password is Required").oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true
  });

  //   console.log(formik.errors, formik.touched)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input name="name" type="text" {...formik.getFieldProps("name")} />
          {formik.errors && formik.touched.name && (
            <div>{formik.errors.name}</div>
          )}
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="text" {...formik.getFieldProps("email")} />
          {formik.errors && formik.touched.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            type="text"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.errors && formik.touched.phoneNumber && (
            <div>{formik.errors.phoneNumber}</div>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors && formik.touched.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.errors && formik.touched.confirmPassword && (
            <div>{formik.errors.confirmPassword}</div>
          )}
        </div>
        <button type="submit" disabled={!formik.isValid}>submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
