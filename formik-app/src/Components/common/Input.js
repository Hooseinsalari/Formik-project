import React from 'react';

const Input = ({label, name, formik, type= "text"}) => {
    return (
        <div>
          <label>{label}</label>
          <input name={name} type={type} {...formik.getFieldProps(name)} />
          {formik.errors[name] && formik.touched[name] && (
            <div>{formik.errors[name]}</div>
          )}
        </div>
    );
};

export default Input;