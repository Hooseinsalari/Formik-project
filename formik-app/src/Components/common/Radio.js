import React from "react";

const Radio = ({formik, user, name}) => {
 
  return (
    <div className="radioContainer">
      {user.map((item) => (
        <React.Fragment key={item.value} >
          <input
            type="radio"
            id={item.value}
            value={item.value}
            name={name}
            onChange={formik.handleChange}
            checked={formik.values[name].includes(item.value)}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </React.Fragment>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Radio;
