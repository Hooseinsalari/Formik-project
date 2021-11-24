import React from 'react';

const SelectComponent = ({formik, name, selectOption}) => {
    return (
        <div>
          <select name={name} {...formik.getFieldProps(name)}>
              {selectOption.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
              ))}
        
          </select>
          {formik.errors[name] && formik.touched[name] && (
            <div>{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default SelectComponent;