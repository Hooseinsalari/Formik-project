import React from 'react';

const SelectComponent = ({formik, name, selectOption}) => {
    return (
        <div className="selectContainer">
          <select name={name} {...formik.getFieldProps(name)} className="select">
              {selectOption.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
              ))}
        
          </select>
          {formik.errors[name] && formik.touched[name] && (
            <div className="error">{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default SelectComponent;