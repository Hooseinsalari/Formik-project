import React from 'react';

const Input = ({label, name, formik, type= "text"}) => {
    return (
        <div className="formContorol">
          <label className="inputLabel">{label}</label>
          <input className="input" name={name} type={type} {...formik.getFieldProps(name)} />
          {formik.errors[name] && formik.touched[name] && (
            <div className="error">{formik.errors[name]}</div>
          )}
        </div>
    );
};

export default Input;