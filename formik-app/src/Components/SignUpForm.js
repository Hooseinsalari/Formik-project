import React, { useState } from "react";
import { useFormik } from "formik";

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
const validate = (values) => {
    let errors = {};

    if(!values.name) {
        errors.name = "Name is Required"
    }

    if(!values.email) {
        errors.email = "Email is Required"
    }

    if(!values.password) {
        errors.password = "Password is Required"
    }
    
    return errors;
}

const SignUpForm = () => {


  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  console.log(formik.errors)


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
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="text"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
