import React from "react";

const Input = ({
  name = "",
  value,
  handleChangeInput,
  type = "text",
  placeholder,
  className,
}) => {
  return (
    <label name={name} className={className+" my-5"}>
      <h2 className="">{name.toUpperCase()}</h2>
      <input
        className="text-center"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={handleChangeInput}
        value={value}
      />
    </label>
  );
};

export default Input;
