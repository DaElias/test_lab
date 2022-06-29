import React, { useState, useEffect } from "react";

const Input = ({
  name = "",
  type = "text",
  placeholder = "",
  value = "",
  handleChangeInput,
  title,
}) => {
  const [validar, setvalidar] = useState(true);

  useEffect(() => {
    if (value.length === 0) {
      setvalidar(false);
    } else {
      setvalidar(true);
    }
  }, [value]);

  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {title}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
          !validar ? "border-red-500" : "border-green-500"
        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeInput}
        name={name}
        required
        
      />
      <p
        className={`text-red-500 text-xs italic ${
          validar ? "hidden" : "block"
        }`}
      >
        Debe llenar este campo!!
      </p>
    </div>
  );
};

export default Input;
