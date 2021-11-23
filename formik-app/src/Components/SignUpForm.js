import React, { useState } from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  // const [userData, setUserData] = useState({name:"", email: "", password: ""})

  // const inputHandler = (event) => {
  //     setUserData({...userData, [event.target.name]: event.target.value})
  // }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("data sended...");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
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
