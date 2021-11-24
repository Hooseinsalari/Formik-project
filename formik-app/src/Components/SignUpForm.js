import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Input from "./common/Input";
import Radio from "./common/Radio";

import axios from "axios";

import * as Yup from "yup";
import SelectComponent from "./common/SelectComponent";
import CheckBoxComponent from "./common/CheckBoxComponent";

const selectOption = [
    { label: "Select your Country", value: "" },
    { label: "Iran", value: "IR" },
    { label: "Amrican", value: "US" },
    { label: "England", value: "UK" },
    { label: "Kanada", value: "KA" },
]

const checkedBoxOption = [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
]

// this is for radio button
const user = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
    { label: "Other", value: 2 },
  ];

//.1
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  gender: "",
  country: "",
  interest: [] //deghat kon ke in yek arraye khali hast
};
// 2
const onSubmit = (values) => {
  console.log(values);
    axios.post("http://localhost:3001/user", values)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
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
  gender: Yup.string().required("Gender is Required"),
  country: Yup.string().required("Select Options is Required"),
  interest: Yup.array().min(1).required("Please select your interest")
});

const SignUpForm = () => {
    const [savedData, setSavedData] = useState(null)
  const formik = useFormik({
    initialValues: savedData || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true
  });

//   useEffect(() => {
//       axios("http://localhost:3001/user/1")
//         .then((response) => setSavedData(response.data))
//         .catch((error) => console.log(error))
//   }, [])

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        
        <Input name="name" label="Name" formik={formik} />
        <Input name="email" label="Email" formik={formik} />
        <Input name="phoneNumber" label="Phone Number" formik={formik} />
        <Input name="password" label="Password" formik={formik} type="password" />
        <Input name="confirmPassword" label="Confirm Password" formik={formik} type="password" />
       
        <div>
            <Radio user={user} formik={formik} name="gender" />
        </div>
        <div>
            <SelectComponent name="country" formik={formik} selectOption={selectOption} />
        </div>
        <div>
            <CheckBoxComponent name="interest" formik={formik} checkedBoxOption={checkedBoxOption} />
        </div>

        <button type="submit" disabled={!formik.isValid}>submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
