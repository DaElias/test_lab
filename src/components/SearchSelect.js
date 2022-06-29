import React, { useEffect, useState } from "react";

const SearchSelect = ({
  handleChangeInput,
  SearchValue = "",
  elemtsLista = [],
  setSearchValue,
  name = "",
}) => {
  const [show, setShow] = useState(false);

  const handleSearchValue = (currentElement = "") => {
    setSearchValue((elemts) => ({ ...elemts, [name]: currentElement }));
    setShow(false);
  };

  useEffect(() => {
    if (elemtsLista.length > 0) {
      setShow(true);
    } else setShow(false);
  }, [elemtsLista]);
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {name}
      </label>
      <input
        onChange={handleChangeInput}
        name={name}
        value={SearchValue}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
      />
      {show && (
        <select
          multiple
          className="relative bg-color5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {elemtsLista.map(({ name, id }) => (
            <option
              key={id}
              value={name}
              onClick={() => handleSearchValue(name)}
            >
              {name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SearchSelect;
