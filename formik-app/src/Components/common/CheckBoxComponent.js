import React from "react";

const CheckBoxComponent = ({ formik, checkedBoxOption, name }) => {
  return (
    <div>
      {checkedBoxOption.map((item) => (
        <React.Fragment key={item.value}>
          <input
            type="checkbox"
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

export default CheckBoxComponent;
